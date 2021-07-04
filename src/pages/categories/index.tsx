import React, { ReactElement } from 'react';
import Layout from '~/layouts/websiteLayout';
import ProductCategories from '~/components/website/ProductCategories/product-categories';
import { useTranslation } from 'react-i18next';

const CategoriesPage = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <Layout title={t('website:category_title')}>
      <ProductCategories />
    </Layout>
  );
};

export default CategoriesPage;
