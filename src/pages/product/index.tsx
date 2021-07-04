import * as React from 'react';
import { NextPage } from 'next';
import DashboardLayout from '../../layouts/dashboardLayout';
import Product from '~/components/product/Product/product';

const ProductPage: NextPage = (): React.ReactElement => {
  return (
    <DashboardLayout headline="Product">
      <Product />
    </DashboardLayout>
  );
};

export default ProductPage;
