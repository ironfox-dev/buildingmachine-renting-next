import * as React from 'react';
import { NextPage } from 'next';
import DashboardLayout from '../../layouts/dashboardLayout';
import ProductModel from '~/components/productModel/ProductModel/product-model';

const ProductModelPage: NextPage = (): React.ReactElement => {
  return (
    <DashboardLayout headline="Product Model">
      <ProductModel />
    </DashboardLayout>
  );
};

export default ProductModelPage;
