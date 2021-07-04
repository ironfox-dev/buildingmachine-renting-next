import React, { useState, useEffect } from 'react';
import * as _ from 'lodash';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';

import {
  useCreateProductMutation,
  useCreateOwnerMutation,
  useProductOwnersQuery,
  useProductsQuery,
  useLocationsListQuery,
  useServiceTemplatesQuery,
  useProductTypesQuery,
  ProductOwnerFragmentDoc,
  ProductFragmentDoc,
} from '~/graphql/graphql';
import { useSnackbar, ConfirmationDialog } from '~/shared/index';
import ProductTable from '../ProductTable/product-table';
import ProductModal from '../ProductModal/product-modal';

const Product = (): React.ReactElement => {
  const { t } = useTranslation();

  const [services, setServices] = useState([]);
  const [owner, setOwner] = useState(null);
  const { Snackbar, showSnackbar } = useSnackbar();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState<boolean>(false);
  const [selectedProductModel, setSelectedProductModel] = useState(null);
  const [selectedProductType, setSelectedProductType] = useState(null);

  const { loading: loadingOwners, data: owners } = useProductOwnersQuery();
  const { loading: loadingProducts, data: products } = useProductsQuery();
  const { loading: loadingLocations, data: locations } = useLocationsListQuery();
  const { loading: loadingServices, data: serviceTemplatesQuery } = useServiceTemplatesQuery();
  const { loading: loadingProductTypes, data: productTypes } = useProductTypesQuery();

  const [createProduct] = useCreateProductMutation({
    update(cache, { data }) {
      cache.modify({
        fields: {
          products(existingProducts = []) {
            const newProduct = cache.writeFragment({
              data: data.createProduct,
              fragment: ProductFragmentDoc,
            });
            return [...existingProducts, newProduct];
          },
          productsFiltered(existingProducts = []) {
            const newProduct = cache.writeFragment({
              data: data.createProduct,
              fragment: ProductFragmentDoc,
            });
            return [...existingProducts.filteredProducts, newProduct];
          },
        },
      });
    },
  });

  const [createOwner] = useCreateOwnerMutation({
    update(cache, { data }) {
      cache.modify({
        fields: {
          productOwners(existingOwners = []) {
            const newOwner = cache.writeFragment({
              data: data.createOwner,
              fragment: ProductOwnerFragmentDoc,
            });
            return [...existingOwners, newOwner];
          },
        },
      });
    },
  });

  useEffect(() => {
    if (serviceTemplatesQuery) {
      const computedServiceTemplates = _.map(serviceTemplatesQuery.serviceTemplates, (template) => {
        return {
          ...template,
          price: template.default ? '0' : undefined,
          checked: template.default ? true : false,
        };
      });

      setServices(computedServiceTemplates);
    }
  }, [serviceTemplatesQuery]);

  const confirmDialogHandler = () => {
    setIsConfirmationOpen(false);
    setIsModalOpen(false);
  };

  const handleOwnerChange = (name) => {
    setOwner(owners.productOwners.find((o) => o.name === name));
  };

  const formSubmitHandler = async (values) => {
    const product = {
      ...values,
      productModelId: selectedProductModel.id,
      productOwnerId: owner.id,
      unitSerialNumber: _.parseInt(values.unitSerialNumber),
      productLeadTime: values.productLeadTime ? parseFloat(values.productLeadTime) : null,
    };

    const productServices = _.map(values.services, (service) => {
      if (service.checked) {
        return _.assign({
          price: parseFloat(service.price),
          serviceTemplate: service.id,
        });
      }
    });

    delete product.services;
    delete product.owner;
    product.calculateWeekend = Boolean(product.calculateWeekend);
    if (!selectedProductModel.hasVin) delete product.vin;
    if (!owner.isFlexcavo) {
      delete product.priceDaily;
      delete product.priceWeekly;
      delete product.priceMonthly;
    }
    Object.keys(product).forEach((key) => {
      if (product[key] === '') delete product[key];
    });

    try {
      await createProduct({ variables: { product, productServices: _.compact(productServices) } });
      showSnackbar('success', t('message:success_creating_product'));
      setIsModalOpen(false);
    } catch (err) {
      showSnackbar('error', `${t('message:error_creating_product')} ${err.message}`);
    }
  };

  const ownerCreationHandler = async (name) => {
    try {
      const newOwner = await createOwner({ variables: { owner: { name } } });
      setOwner(newOwner.data.createOwner);
      showSnackbar('success', 'Owner created successfully');
    } catch (err) {
      showSnackbar('error', `Error creating owner: ${err.message}`);
    }
  };

  return (
    <>
      {(loadingOwners || loadingProducts || loadingLocations || loadingServices || loadingProductTypes) && (
        <p>Loading...</p>
      )}
      {owners && products && services && productTypes && (
        <div style={{ padding: 25 }}>
          <Button color="primary" variant="contained" onClick={() => setIsModalOpen(true)}>
            {t('product:new_product')}
          </Button>

          <br />
          <br />

          <ProductTable products={products} />
          <Snackbar />

          <ProductModal
            isOpen={isModalOpen}
            onClose={() => setIsConfirmationOpen(true)}
            owners={owners.productOwners}
            locations={locations?.locations}
            services={services}
            productModel={selectedProductModel}
            productType={selectedProductType}
            productTypes={productTypes.productTypes}
            formSubmitHandler={formSubmitHandler}
            handleModelChange={(value) => setSelectedProductModel(value)}
            handleTypeChange={(value) => setSelectedProductType(value)}
            handleOwnerChange={handleOwnerChange}
          />

          <ConfirmationDialog
            open={isConfirmationOpen}
            onConfirm={confirmDialogHandler}
            onCancel={() => setIsConfirmationOpen(false)}
            content={t('product:confirm_close_msg')}
          />
        </div>
      )}
    </>
  );
};

export default Product;
