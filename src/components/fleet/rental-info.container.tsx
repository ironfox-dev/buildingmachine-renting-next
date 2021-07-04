import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import RentalInfoComponent from './rental-info.component';
import { useTranslation } from 'react-i18next';
import {
  useRentalInfoLazyQuery,
  useUpdateProductServiceMutation,
  useServiceTemplatesQuery,
  useCreateProductServicesMutation,
  useUpdateProductMutation,
  useDeleteProductServicesMutation,
  useLocationsListQuery,
} from '~/graphql/graphql';
import { RentalData } from '~/components/fleet/interfaces';
import * as _ from 'lodash';
import { currencyFormat } from '~/utils/format';
import { ServiceTemplate, EditedServices } from './interfaces';

const PRICING_STRUCTURES = {
  FIXED: 'fixed',
  HOURLY: 'hourly',
  DAILY: 'daily',
};

const getFormattedPricingStructure = (t, structure) => {
  switch (structure) {
    case PRICING_STRUCTURES.FIXED:
      return t('common:fixedPrice');
    case PRICING_STRUCTURES.HOURLY:
      return t('common:hour');
    case PRICING_STRUCTURES.DAILY:
      return t('common:day');
    default:
      return structure;
  }
};

const getFormattedServicePrice = (t, price, structure) => {
  if (structure === PRICING_STRUCTURES.FIXED) {
    return `${currencyFormat(price, 'EUR')} ${getFormattedPricingStructure(t, structure)}`;
  } else {
    return `${currencyFormat(price, 'EUR')} / ${getFormattedPricingStructure(t, structure)}`;
  }
};

const formatRentalData = (product, t): RentalData => ({
  ...product,
  attachments: product.productModel.productModelBundles,
  services: product.services.map((service) => ({
    id: service.id,
    name: service.serviceTemplate.name,
    value: getFormattedServicePrice(t, service.price, service.serviceTemplate.pricingStructure),
    price: +service.price,
    templateId: service.serviceTemplate.id,
    testText: getFormattedServicePrice(t, '', service.serviceTemplate.pricingStructure),
  })),
  leadTime: product.productLeadTime || product.productModel.modelLeadTime,
  serviceTime: product.serviceTime,
  calculateWeekend: product.calculateWeekend,
});

export default function RentalInfoContainer(): React.ReactElement {
  const { t } = useTranslation();
  const [formattedInfo, setInfo] = useState({} as RentalData);
  const [serviceTemplates, setServiceTemplates] = useState<ServiceTemplate[]>([]);
  const [initialServicesState, setInitialServicesState] = useState<EditedServices>(null);
  const [editedServicesState, setEditedServicesState] = useState<EditedServices>(null);
  const [isRentalInfoEdition, setIsRentalInfoEdition] = useState<boolean>(false);
  const [isLeadServiceTimeEdition, setLeadServiceTimeEdition] = useState<boolean>(false);

  const { data: serviceTemplatesQuery } = useServiceTemplatesQuery();
  const [updateProductService] = useUpdateProductServiceMutation();
  const [deleteProductServices] = useDeleteProductServicesMutation();
  const [createProductServices] = useCreateProductServicesMutation();
  const [updateRentalInfo] = useUpdateProductMutation();
  const { data: locations } = useLocationsListQuery();

  useEffect(() => {
    if (serviceTemplatesQuery) {
      const serviceTemplates = serviceTemplatesQuery.serviceTemplates as unknown;
      setServiceTemplates(serviceTemplates as ServiceTemplate[]);
    }
  }, [serviceTemplatesQuery]);

  const [getRentalInfo, { data: rentalInfo, refetch: rentalInfoRefetch }] = useRentalInfoLazyQuery();
  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    getRentalInfo({ variables: { id: id as string } });
  }, [id]);

  useEffect(() => {
    if (rentalInfo) {
      setInfo(formatRentalData(rentalInfo.product, t));
    }
  }, [rentalInfo]);

  const handleStartServiceEdit = () => {
    const servicesState = _.keyBy(formattedInfo.services || [], (s) => s.templateId);
    setInitialServicesState(servicesState);
    setEditedServicesState(
      _.keyBy(
        serviceTemplates.map((service) => ({
          ...service,
          checked: Boolean(servicesState[service.id]) || service.default,
          price: servicesState[service.id] ? servicesState[service.id].price : null,
        })),
        (s) => s.id
      ) as EditedServices
    );
  };

  const handleOnEdit = async () => {
    const servicesState = _.keyBy(formattedInfo.services || [], (s) => s.templateId);
    const editedServicesStateChecked = _.omitBy(editedServicesState, (s) => !s.checked);

    const servicesIdsToUpdate = [];
    const servicesIdsToDelete = [];
    const servicesIdsToCreate = [];

    _.forEach(editedServicesStateChecked, (value, index) => {
      if (initialServicesState[index] && value.price !== initialServicesState[index].price) {
        servicesIdsToUpdate.push(index);
      } else if (!initialServicesState[index]) {
        servicesIdsToCreate.push(index);
      }
    });

    _.forEach(initialServicesState, (value, index) => {
      if (!editedServicesStateChecked[index]) {
        servicesIdsToDelete.push(index);
      }
    });

    let servicesRequests = [];

    if (!_.isEmpty(servicesIdsToUpdate)) {
      const servicesToUpdate = servicesIdsToUpdate.map((id) => ({
        id: servicesState[id].id,
        price: +editedServicesState[id].price,
      }));

      servicesRequests = servicesToUpdate.map((data) =>
        updateProductService({
          variables: {
            id: data.id,
            service: {
              price: data.price,
            },
          },
        })
      );
    }

    if (!_.isEmpty(servicesIdsToDelete)) {
      const servicesToDelete = servicesIdsToDelete.map((id) => ({
        id: servicesState[id].id,
      }));

      servicesRequests.push(
        deleteProductServices({
          variables: {
            ids: servicesToDelete.map((s) => s.id),
          },
        })
      );
    }

    if (!_.isEmpty(servicesIdsToCreate)) {
      let servicesToCreate = servicesIdsToCreate.map((id) => ({
        serviceTemplate: id,
        price: +editedServicesState[id].price,
      }));

      servicesRequests.push(
        createProductServices({
          variables: {
            productId: formattedInfo.id,
            productServices: servicesToCreate,
          },
        })
      );
    }

    await Promise.all(servicesRequests);
    await rentalInfoRefetch();
    setEditedServicesState(null);
  };

  const handleChangeService = (id, value) => {
    const newServiceState = _.clone(editedServicesState);
    newServiceState[id]['price'] = value;
    setEditedServicesState(newServiceState);
  };

  const handleCheckService = (id) => {
    const newServiceState = _.clone(editedServicesState);
    newServiceState[id]['checked'] = !newServiceState[id]['checked'];
    setEditedServicesState(newServiceState);
  };

  const handleStopServiceEdit = () => {
    setEditedServicesState(null);
  };

  const handleCancelRentalInfoEdition = () => {
    setInfo(formatRentalData(rentalInfo.product, t));
    setIsRentalInfoEdition(false);
  };

  const handleChangeRentalInfo = (name) => (value) => {
    if (name === 'calculateWeekend') {
      setInfo({
        ...formattedInfo,
        [name]: Boolean(value.id),
      });
    } else {
      setInfo({
        ...formattedInfo,
        [name]: value,
      });
    }
  };

  const handleStartRentalInfoEdition = useCallback(() => {
    setIsRentalInfoEdition(true);
    setLeadServiceTimeEdition(false);
    setInfo(formatRentalData(rentalInfo.product, t));
  }, [rentalInfo, t]);

  const handleCancelLeadServiceTimeEdition = () => {
    setInfo(formatRentalData(rentalInfo.product, t));
    setLeadServiceTimeEdition(false);
  };

  const handleStartLeadServiceTimeEdition = useCallback(() => {
    setLeadServiceTimeEdition(true);
    setIsRentalInfoEdition(false);
    setInfo(formatRentalData(rentalInfo.product, t));
  }, [rentalInfo, t]);

  const handleEditRentalInfo = async () => {
    await updateRentalInfo({
      variables: {
        id: id as string,
        product: {
          priceDaily: +formattedInfo.priceDaily,
          priceWeekly: +formattedInfo.priceWeekly,
          priceMonthly: +formattedInfo.priceMonthly,
          productLeadTime: +formattedInfo.leadTime,
          serviceTime: +formattedInfo.serviceTime,
          calculateWeekend: formattedInfo.calculateWeekend,
        },
      },
    });
    await rentalInfoRefetch();
    setIsRentalInfoEdition(false);
    setLeadServiceTimeEdition(false);
  };

  return React.createElement(RentalInfoComponent, {
    data: formattedInfo,
    loaded: Boolean(formattedInfo),
    onSubmitServicesChange: handleOnEdit,
    services: editedServicesState,
    onCheckService: handleCheckService,
    onChangeService: handleChangeService,
    onStartServiceEdit: handleStartServiceEdit,
    onStopServiceEdit: handleStopServiceEdit,
    onStartRentalInfoEdition: handleStartRentalInfoEdition,
    onChangeRentalInfo: handleChangeRentalInfo,
    onCancelRentalInfoEdition: handleCancelRentalInfoEdition,
    onEditRentalInfo: handleEditRentalInfo,
    onStartLeadServiceTimeEdition: handleStartLeadServiceTimeEdition,
    onCancelLeadServiceTimeEdition: handleCancelLeadServiceTimeEdition,
    isRentalInfoEdition,
    isLeadServiceTimeEdition,
    locations: locations?.locations,
  });
}
