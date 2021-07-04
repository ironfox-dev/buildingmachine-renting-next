import React from 'react';
import useTableHoc from './table-hoc';
import Upsert from '../upsert';
import { makeStyles } from '@material-ui/core/styles';
import { ServiceTemplate } from '../helpers/interfaces';
import { Box, ButtonBase, Grid, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import listStyle from './list.style';
import ServiceRow from './serviceRow/service-row';
import { useSnackbar } from '~/shared/index';

const useListStyle = makeStyles(listStyle);

export default function List(): React.ReactElement {
  const tableHoc = useTableHoc();
  const { Snackbar, showSnackbar } = useSnackbar();

  const listClasses = useListStyle();
  const { t } = useTranslation();

  return (
    <div className={listClasses.container}>
      <Grid container alignItems="center">
        <Grid item xs={9}>
          <Typography variant="h1" className={listClasses.headerTitle}>
            {t('settings:manage_services')}
          </Typography>
          <Typography variant="body1" className={listClasses.headerDescription}>
            {t('settings:add_change_remove_service')}
          </Typography>
        </Grid>
        <Grid item xs={3} container direction="row" justify="flex-end">
          <ButtonBase
            onClick={() => tableHoc.handleModalOpen({ isCreating: true })}
            className={listClasses.createButton}
          >
            <Typography variant="body1">{t('settings:create_new_service')}</Typography>
          </ButtonBase>
        </Grid>
        <Grid item xs={12}>
          {tableHoc.serviceTemplatesList.map((item: ServiceTemplate, i: number) => (
            <ServiceRow showSnackbar={showSnackbar} serviceItem={item} key={i} />
          ))}
        </Grid>
      </Grid>

      <Box mt={2}>
        <Upsert
          data={tableHoc.values}
          isModalOpen={tableHoc.isModalOpen}
          handleModalClose={tableHoc.handleModalClose}
        />
      </Box>
      <Snackbar />
    </div>
  );
}
