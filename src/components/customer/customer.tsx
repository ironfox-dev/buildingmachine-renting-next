import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import MaterialTable from 'material-table';
import { TableIcons } from '~/components/icon/Table';
import { useRouter } from 'next/router';
import { useListCustomersQuery } from '~/graphql/graphql';
import { Paper } from '@material-ui/core';
import useStyles from './customer.styles';

interface Customer {
  id: string;
  companyName: string;
  name: string;
  email: string;
  address: string;
  isEmailVerified: boolean;
}

const customersList = (): ReactElement => {
  const classes = useStyles();
  const router = useRouter();
  const { data } = useListCustomersQuery();
  const { t } = useTranslation();

  let rows: Customer[] = [];

  if (data?.listCustomers) {
    rows = data.listCustomers.map((company) => {
      const user = company.users?.[0];
      const address = company.addresses?.[0];

      return {
        id: company.id,
        companyName: company.name,
        name: `${user.firstname} ${user.lastname}`,
        email: user.email,
        address: `${address.street} ${address.city}`,
        isEmailVerified: user.isEmailVerified,
      };
    });
  }

  return (
    <Paper className={classes.noPaddingPaper}>
      <MaterialTable
        title=""
        icons={TableIcons}
        columns={[
          { field: 'companyName', title: t('user:company_name') },
          { field: 'name', title: t('user:name') },
          { field: 'email', title: t('user:email') },
          { field: 'address', title: t('user:address') },
          { field: 'isEmailVerified', title: t('user:account_verified'), type: 'boolean' },
        ]}
        data={rows}
        options={{
          rowStyle: (e, index) => ({
            backgroundColor: index % 2 ? '#EEE' : '#FFF',
          }),
          pageSize: 10,
          actionsColumnIndex: -1,
        }}
        onRowClick={(event, customer: Customer) => router.push('/customers/[id]', `/customers/${customer.id}`)}
        localization={{
          pagination: {
            labelDisplayedRows: `{from}-{to} ${t('of')} {count}`,
            labelRowsSelect: t('rows'),
          },
        }}
      />
    </Paper>
  );
};

export default customersList;
