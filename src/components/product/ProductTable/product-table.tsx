import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MaterialTable from 'material-table';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { ProductListProps } from '../interfaces/interfaces';
import { TableIcons } from '~/components/icon/Table';

const ProductTable = ({ products }: ProductListProps): React.ReactElement => {
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(
      products.products
        .filter((product) => product.productOwner.isFlexcavo)
        .map((product) => {
          return {
            id: product.id,
            type: product.productModel.type.name,
            manufacturer: product.productModel.manufacturer.abbreviation || product.productModel.manufacturer.name,
            model: product.productModel.name,
            serialNumber: product.serialNumber,
            modelKey: product.productModel.key,
          };
        })
    );
  }, [products]);

  const handleButtonClick = (e, rowData): void => {
    router.push(`/product/${rowData.key}/machine`);
    localStorage.removeItem('orderStartDate');
    localStorage.removeItem('orderEndDate');
    localStorage.removeItem('orderLocation');
    localStorage.removeItem('orderServiceIds');
    localStorage.removeItem('orderBundleIds');
    localStorage.removeItem('orderPersonalData');
  };

  const title = process.env.NEXT_PUBLIC_CLIENT_DISPLAY_NAME
    ? `${process.env.NEXT_PUBLIC_CLIENT_DISPLAY_NAME} Products`
    : 'Products';

  return (
    <MaterialTable
      title={title}
      icons={TableIcons}
      data={data}
      columns={[
        { title: 'Type', field: 'type' },
        { title: 'Manufacturer', field: 'manufacturer' },
        { title: 'Model', field: 'model' },
        { title: 'Serial number', field: 'serialNumber' },
      ]}
      actions={[
        {
          icon: ShoppingCartIcon,
          tooltip: 'Order',
          onClick: handleButtonClick,
        },
      ]}
      options={{
        actionsColumnIndex: -1,
      }}
    />
  );
};

export default ProductTable;
