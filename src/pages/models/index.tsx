import React, { ReactElement } from 'react';
import Layout from '~/layouts/websiteLayout';
import ProductCategories from '~/components/website/ProductCategories/product-categories';

const ModelsPage = (): ReactElement => (
  <Layout title="Flexcavo">
    <ProductCategories />
  </Layout>
);

export default ModelsPage;
