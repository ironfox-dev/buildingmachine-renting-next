import React, { useEffect, useState, useRef } from 'react';
import MaterialTable from 'material-table';
import { useRouter } from 'next/router';
import { TableIcons } from '~/components/icon/Table';
import { Grid, Typography, ButtonBase } from '@material-ui/core';
import { remove, isEmpty } from 'lodash';
import { ProductListProps, MachineStatusInfo, ProductAvailabilityItem } from '../helpers/interfaces';
import { startOrderCreationSteps } from '~/components/order/helpers/orderStepsHelpers';
import { useProductsFilteredLazyQuery, useProductsAvailabilityLazyQuery } from '~/graphql/graphql';
import { makeStyles } from '@material-ui/core/styles';
import ProductsFilter from './product-filter.container';
import fleetStyle from './fleet.style';
import FilterListIcon from '@material-ui/icons/FilterList';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useTranslation } from 'react-i18next';
import { primary_soft, lightGreen } from '~/constants/colors';
import moment from 'moment';

const FILTERED_PRODUCTS_DATA_PATHS = {
  type: 'type.name',
  manufacturer: 'manufacturer.abbreviation',
  model: 'productModel.name',
  serialNumber: 'product.serialNumber',
  location: 'location.name',
};

const useStyles = makeStyles(fleetStyle);

const ProductTable = ({ locations }: ProductListProps): React.ReactElement => {
  const [filters, setFilters] = useState({});
  const [initialDataPassed, updateInitialDataPassed] = useState(false);
  const router = useRouter();
  const tableRef = useRef();
  const classes = useStyles();
  const { t } = useTranslation();
  const currentDateTime = moment().toISOString();

  const [
    getFilteredProducts,
    { loading: loadingProducts, data: products, refetch: productsReFetch },
  ] = useProductsFilteredLazyQuery();

  const [getProductsAvailability, { data: productsAvailability }] = useProductsAvailabilityLazyQuery();

  const handleCheckboxToggle = (field, id, checked) => {
    const updateFilters = (filters) => {
      const updatedFilters = { ...filters };
      if (checked) {
        updatedFilters[field] = updatedFilters[field] ? [...updatedFilters[field], id] : [id];
      } else {
        remove(updatedFilters[field], (existId) => existId === id);
      }
      return updatedFilters;
    };

    setFilters((prevState) => {
      return updateFilters(prevState);
    });
    if (tableRef?.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      tableRef.current.onQueryChange();
    }
  };

  useEffect(() => {
    if (getFilteredProducts) {
      getFilteredProducts({
        variables: { query: { search: '', offset: 0, limit: 5, order: 'ASC', order_column: '' } },
      });
    }
    if (getProductsAvailability) {
      getProductsAvailability({
        variables: {
          fromDate: currentDateTime,
        },
      });
    }
  }, [getFilteredProducts, getProductsAvailability]);

  const filterProducts = (data) =>
    data.productsFiltered.filteredProducts.map((product) => {
      return {
        id: product.id,
        type: product.productModel.type.name,
        abbreviation: product.productModel.manufacturer.abbreviation,
        name: product.productModel.type.name,
        manufacturer: product.productModel.manufacturer.abbreviation || product.productModel.manufacturer.name,
        model: product.productModel.name,
        serialNumber: product.serialNumber,
        location: product.location.name,
        projectAddress: product.location ? `${product.location.city}, ${product.location.street}` : '',
        orders: product.productSalesOrderItems,
      };
    });

  const handleData = async (query) => {
    const { page, pageSize, orderBy, search, orderDirection } = query;
    const isFiltersSet = Object.keys(filters).length && filters['locations'].length;

    if (initialDataPassed) {
      const orderColumn = orderBy ? FILTERED_PRODUCTS_DATA_PATHS[orderBy.field] : '';
      let resProducts;
      if (search || isFiltersSet) {
        resProducts = await productsReFetch({
          query: {
            search: search || '',
            offset: 0,
            limit: pageSize,
            order: orderDirection.toUpperCase() || 'ASC',
            order_column: orderColumn,
          },
          locations: filters['locations'] || [],
        });
        return {
          data: filterProducts(resProducts.data),
          page: 0,
          totalCount: resProducts.data.productsFiltered.totalCount,
        };
      } else {
        resProducts = await productsReFetch({
          query: {
            search: '',
            offset: page * pageSize,
            limit: pageSize,
            order: orderDirection.toUpperCase() || 'ASC',
            order_column: orderColumn,
          },
        });

        return {
          data: filterProducts(resProducts.data),
          page,
          totalCount: resProducts.data.productsFiltered.totalCount,
        };
      }
    } else {
      updateInitialDataPassed(true);
      return {
        data: filterProducts(products),
        page: 0,
        totalCount: products.productsFiltered.totalCount,
      };
    }
  };

  const handleButtonClick = (e, rowData): void => {
    startOrderCreationSteps(rowData.id, router);
  };

  const onRowClick = (e, rowData): void => {
    router.push(`/fleet/${rowData.id}/all_items`);
  };

  const dataTableHeader = (headerTitle) => (
    <Grid container direction="row" alignItems="center" justify="space-between">
      <Typography variant="body1" className={classes.tableHeaderTitle}>
        {headerTitle}
      </Typography>
      <ButtonBase className={classes.columnFilterButton}>
        <FilterListIcon className={classes.columnFilterButton} />
      </ButtonBase>
    </Grid>
  );

  const machineNameWrapper = (nameData) => {
    return (
      <Grid>
        <Typography variant="body1" className={classes.productAbbreviation}>
          {nameData.abbreviation}&nbsp;{nameData.model}
        </Typography>
        <Typography variant="body1" className={classes.productName}>
          {nameData.name}
        </Typography>
      </Grid>
    );
  };

  const reuturnMachineStatus = (productId) => {
    const productAvailabilityItem: ProductAvailabilityItem = productsAvailability?.products.filter(
      (item) => item.id === productId
    )[0];
    let statusValue: MachineStatusInfo = {
      marker: '',
      description: '',
    };
    if (!isEmpty(productAvailabilityItem)) {
      if (productAvailabilityItem.availability.status.toUpperCase() === 'AVAILABLE') {
        statusValue = {
          marker: productAvailabilityItem.availability.status.toUpperCase(),
          description: productAvailabilityItem.availability.nextReservationStart
            ? `until ${moment(productAvailabilityItem.availability.nextReservationStart).format('YYYY-MM-DD')}`
            : 'no orders',
        };
      } else {
        statusValue = {
          marker: productAvailabilityItem.availability.status.toUpperCase(),
          description: `until ${moment(productAvailabilityItem.availability.nextAvailableDate).format('YYYY-MM-DD')}`,
        };
      }
    }
    return statusValue;
  };
  return (
    <>
      <ProductsFilter locations={locations} handleCheckboxToggle={handleCheckboxToggle} />
      {loadingProducts && <p>Loading...</p>}
      {(initialDataPassed ? initialDataPassed : products) && (
        <Grid className={classes.tableWrapper}>
          <MaterialTable
            tableRef={tableRef}
            icons={TableIcons}
            data={handleData}
            columns={[
              {
                title: dataTableHeader(t('fleet:serial_number')),
                field: 'serialNumber',
                render: (rowData) => (
                  <Typography variant="body1" className={classes.serialNumber}>
                    {rowData.serialNumber}
                  </Typography>
                ),
              },
              {
                title: dataTableHeader(t('fleet:machine')),
                field: 'manufacturerName',
                render: (rowData) => machineNameWrapper(rowData),
              },
              {
                title: dataTableHeader(t('fleet:rental_park')),
                field: 'location',
              },
              {
                title: dataTableHeader(t('fleet:status_machine')),
                field: 'type',
                render: (rowData) => (
                  <Typography variant="body1" className={classes.orderStatus}>
                    <span
                      style={{
                        backgroundColor:
                          reuturnMachineStatus(rowData.id).marker === 'AVAILABLE' ? lightGreen : primary_soft,
                      }}
                      className={classes.orderMarker}
                    >
                      {reuturnMachineStatus(rowData.id).marker}
                    </span>
                    {reuturnMachineStatus(rowData.id).description}
                  </Typography>
                ),
              },
              {
                title: dataTableHeader(t('fleet:project_address')),
                field: 'projectAddress',
              },
            ]}
            onRowClick={onRowClick}
            options={{
              actionsColumnIndex: -1,
              debounceInterval: 500,
              toolbar: false,
              sorting: false,
            }}
            actions={[
              {
                icon: MoreVertIcon,
                tooltip: 'Order',
                onClick: handleButtonClick,
              },
            ]}
            isLoading={loadingProducts}
          />
        </Grid>
      )}
    </>
  );
};

export default ProductTable;
