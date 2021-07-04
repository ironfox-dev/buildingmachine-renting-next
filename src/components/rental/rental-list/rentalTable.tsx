import React from 'react';
import useTableHoc from './rentalTable.hoc';
import MaterialTable from 'material-table';
import { TableIcons } from '~/components/icon/Table';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Router from 'next/router';

export default function List(): React.ReactElement {
  const tableHoc = useTableHoc();
  const { t } = useTranslation();

  return (
    <div>
      <Box display="flex" mt={2} justifyContent="flex-end"></Box>

      <Box mt={2}>
        <MaterialTable
          title={t('rental:title_rental')}
          icons={TableIcons}
          columns={tableHoc.columns}
          data={tableHoc.ordersList}
          options={{
            rowStyle: {
              backgroundColor: '#EEE',
            },
            pageSize: 10,
            actionsColumnIndex: -1,
          }}
          actions={[
            {
              icon: VisibilityIcon,
              tooltip: t('order:view_order_details'),
              onClick: (event, rowData: Record<string, unknown>) =>
                Router.push('/rental/[id]', `/rental/${rowData.id}`),
            },
          ]}
        />
      </Box>
    </div>
  );
}
