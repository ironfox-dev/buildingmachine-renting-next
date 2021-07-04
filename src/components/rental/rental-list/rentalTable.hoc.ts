import { Column } from 'material-table';
import { useOrdersQuery } from '~/graphql/graphql';
import { useTranslation } from 'react-i18next';
import { currencyFormat } from '~/utils/format';
import moment from 'moment';

const useTableHoc = (): any => {
  const { t } = useTranslation();
  const { loading: isLoading, data: ordersQuery } = useOrdersQuery();
  const ordersList = ordersQuery?.orders.map((o) => ({ ...o }));

  const columns = [
    {
      title: t('rental:order'),
      render: (rowData) => {
        return `${rowData.orderId} - ${t(`rental:${rowData.status}`)}`;
      },
    },
    {
      title: t('rental:machine'),
      render: (rowData) => {
        const salesOrderItem = rowData?.salesOrderItems?.find((val) => val.parentSalesOrderItem === null);
        if (salesOrderItem) {
          const { productManufacturer, productModel, productType } = salesOrderItem;
          return `${productManufacturer} ${productModel} ${productType}`;
        }
      },
    },
    {
      title: t('rental:cost'),
      field: 'price',
      render: (rowData) => currencyFormat(rowData.price),
    },
    {
      title: t('rental:proj_address'),
      render: (rowData) => rowData?.salesOrderAddresses.find((val) => val.type === 'shipping').address,
    },
    {
      title: t('rental:rental_period'),
      render: (rowData) =>
        `${moment(rowData.startDate).format('DD.MM.YY')} - ${moment(rowData.endDate).format('DD.MM.YY')}`,
    },
    {
      title: t('rental:customer'),
      render: (rowData) =>
        `${rowData.firstName} ${rowData.lastName} ${
          rowData.salesOrderAddresses.find((val) => val.type === 'billing').address
        }`,
    },
    {
      title: t('rental:rental_park'),
      field: 'location',
    },
    {
      title: t('rental:channel'),
      field: 'channel',
    },
  ] as Column<any>[];

  const actions = [
    {
      icon: 'FiEdit',
      className: '',
    },
  ];

  return {
    columns,
    actions,
    isLoading,
    ordersList,
  };
};

export default useTableHoc;
