import React, { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import rentalStyle from './rental.style';

import RentalTable from './rental-list/rentalTable';

const useStyles = makeStyles(rentalStyle);

const RentalContainer = (): ReactElement => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <div>
      <div className={styles.titlePanel}>
        <p className={styles.titlePara}>{t('rental:title_rental')}</p>
        <Button className={styles.bookingButton} variant="contained" color="primary">
          {t('rental:new_booking')}
        </Button>
      </div>
      <RentalTable />
    </div>
  );
};

export default RentalContainer;
