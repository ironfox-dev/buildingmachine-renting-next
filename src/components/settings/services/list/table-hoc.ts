import React from 'react';
import { Column } from 'material-table';
import { useServiceTemplatesQuery } from '~/graphql/graphql';
import { ServiceTemplate, TableHocReturns } from '../helpers/interfaces';
import _ from 'lodash';

const useTableHoc = (): TableHocReturns => {
  const [isModalOpen, setModalOpen] = React.useState<boolean>(false);
  const { loading: isLoading, data: serviceTemplatesQuery } = useServiceTemplatesQuery();
  let serviceTemplatesList = serviceTemplatesQuery?.serviceTemplates.map((o) => ({ ...o }));
  serviceTemplatesList = _.sortBy(serviceTemplatesList, ['name']);

  const columns = [
    {
      title: 'Service Name',
      field: 'name',
    },
    {
      title: 'Description',
      field: 'description',
    },
    {
      title: 'Pricing',
      field: 'pricingStructure',
    },
    {
      title: 'Default',
      field: 'default',
    },
  ] as Column<ServiceTemplate>[];

  // Field initial Values
  const initialValues = {
    id: '',
    name: '',
    pricingStructure: '',
    default: false,
    description: '',
    includingWeekend: false,
  };

  const [values, setValues] = React.useState({
    formValues: initialValues,
    isCreating: false,
  });

  // Open Modal Handler
  const handleModalOpen = ({
    rowDetails = initialValues,
    isCreating = false,
  }: {
    rowDetails?: ServiceTemplate;
    isCreating?: boolean;
  }): void => {
    const computedValues: ServiceTemplate = isCreating ? initialValues : rowDetails;
    setValues({
      formValues: computedValues,
      isCreating,
    });
    setModalOpen(true);
  };

  // Close Modal Handler
  const handleModalClose = (): void => {
    setModalOpen(false);
  };

  const actions = [
    {
      icon: 'FiEdit',
      className: '',
      event: handleModalOpen,
    },
  ];

  return {
    columns,
    actions,
    isLoading,
    serviceTemplatesList,
    isModalOpen,
    values,
    handleModalOpen,
    handleModalClose,
  };
};

export default useTableHoc;
