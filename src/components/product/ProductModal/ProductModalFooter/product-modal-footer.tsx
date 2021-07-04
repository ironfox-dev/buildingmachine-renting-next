import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';

import useStyles from './product-modal-footer.styles';
import { ProductModalFooterProps } from '../../interfaces/interfaces';

const ProductModalHeader = ({
  activeStep,
  stepsLength,
  isSelectMode,
  closeModal,
  handleBack,
  handleNext,
  handleCreateMachine,
  handleSubmit,
}: ProductModalFooterProps): React.ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Grid container className={classes.footer}>
      <Grid item xs>
        <Button onClick={closeModal}>{t('product:abort')}</Button>
      </Grid>

      <Grid item xs container direction="row" justify="flex-end" alignItems="center" className={classes.container}>
        {!isSelectMode && (
          <Button disabled={activeStep === 0} onClick={handleBack}>
            {t('common:back')}
          </Button>
        )}

        {isSelectMode ? (
          <Button variant="contained" color="primary" onClick={handleCreateMachine}>
            {t('product:create_machine')}
          </Button>
        ) : activeStep !== stepsLength - 1 ? (
          <Button variant="contained" color="primary" onClick={handleNext}>
            {t('order:continue')}
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            {t('common:finish')}
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default ProductModalHeader;
