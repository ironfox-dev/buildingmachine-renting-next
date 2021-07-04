/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import Link from 'next/link';
import MaterialTable from 'material-table';
import { TableIcons } from '~/components/icon/Table';
import { Backdrop, Box, Button, CircularProgress, TablePagination } from '@material-ui/core';
import Location from './interfaces/interfaces';
import { makeStyles } from '@material-ui/core/styles';
import Router from 'next/router';
import * as _ from 'lodash';
import { useTranslation } from 'react-i18next';
import locationStyle from './location.style';
import { currencyFormat } from '../../utils/format';

const useStyles = makeStyles(locationStyle);

export default function LocationListComponent({ loading, locations }): React.ReactElement {
  const styles = useStyles();
  const { t } = useTranslation();
  const priceUnit = 'EUR';
  const operating_hours_value = 'Mo.-Fr. 7:30-18:00';

  //tableColumns has two values. One is mobile columns and the other is desktop columns.
  const tableColumns = {
    desktop_columns: [
      { title: t('name'), field: 'name' },
      {
        title: t('user:address'),
        field: 'street',
        render: (rowData) => rowData['street'] + ' ' + rowData['city'],
      },
      { title: t('operating_hours'), render: () => operating_hours_value },
      { title: t('user:phone'), field: 'telephone' },
      {
        title: t('price_gasoline'),
        field: 'gasolinePrice',
        render: (rowData) => currencyFormat(rowData['gasolinePrice'], priceUnit),
        align: 'center',
      },
      {
        title: t('price_diesel'),
        field: 'dieselPrice',
        render: (rowData) => currencyFormat(rowData['dieselPrice'], priceUnit),
        align: 'center',
      },
    ],
    mobile_columns: [
      { title: t('name'), field: 'name' },
      {
        title: t('user:address'),
        field: 'street',
        render: (rowData) => rowData['street'] + ' ' + rowData['city'],
      },
      { title: t('operating_hours'), render: () => operating_hours_value },
    ],
  };

  const CustomTable = (props) => (
    <div {...props}>
      <MaterialTable
        icons={TableIcons}
        columns={props.columndata}
        data={_.cloneDeep(locations)}
        options={{
          headerStyle: {
            color: 'grey',
            fontWeight: 'normal',
          },
          pageSize: 10,
          emptyRowsWhenPaging: false,
          showFirstLastPageButtons: false,
        }}
        onRowClick={(event, rowData: Location) => {
          Router.push('/locations/[id]', `/locations/${rowData.id}`);
        }}
        components={{
          Pagination: (props) => (
            <TablePagination
              className={styles.paginationPanel}
              rowsPerPageOptions={[5, 10, 20]}
              count={props.count}
              rowsPerPage={props.rowsPerPage}
              page={props.page}
              onChangePage={(e, page) => props.onChangePage(e, page)}
              onChangeRowsPerPage={(e) => props.onChangeRowsPerPage(e)}
              labelRowsPerPage={t('rental:line_per_page') + ':'}
            />
          ),
        }}
      />
    </div>
  );

  return (
    <>
      <Backdrop className={styles.backdrop} open={loading}>
        {' '}
        <CircularProgress color="inherit" />
      </Backdrop>
      {!loading && locations && (
        <div className={styles.mainPanel}>
          <Box display="flex" justifyContent="space-between">
            <p className={styles.titlePara}>{t('user:rental_park')}s</p>
            <Link href="/locations/[id]/" as="/locations/create">
              <Button variant="contained" color="primary" className={styles.addButton}>
                {t('addLocation')}
              </Button>
            </Link>
          </Box>
          <Box>
            <CustomTable className={styles.desktopTable} columndata={tableColumns.desktop_columns} />
            <CustomTable className={styles.mobileTable} columndata={tableColumns.mobile_columns} />
          </Box>
        </div>
      )}
    </>
  );
}
