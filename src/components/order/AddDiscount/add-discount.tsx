import React, { useEffect, useState, ReactElement } from 'react';
import { Grid, Button, useMediaQuery } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useTranslation } from 'react-i18next';

import { useValidateDiscountCodeMutation } from '~/graphql/graphql';
import { CssBorderlessInput } from '~/shared/inputFields/inputFields';
import useStyles from './add-discount.styles';
import { DiscountCode } from '~/components/settings/discountCodes/discount.interface';
import { AddDiscountProps } from '../interfaces/interfaces';
import { Cancel } from '@material-ui/icons';
import theme from '~/layouts/theme';

const AddDiscount = ({
  handleHidding,
  onDiscountChange,
}: AddDiscountProps): ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const [discountCode, setDiscountCode] = useState<string>('');
  const [validateDiscount, {error: validateDiscountError, data: validateDiscountData}] = useValidateDiscountCodeMutation();

  useEffect(() => {
    if (validateDiscountData) {
      const discount = validateDiscountData.validateDiscountCode as DiscountCode;

      localStorage.setItem('orderAppliedDiscount', JSON.stringify(discount));
      onDiscountChange(discount);
      handleHidding(false);
    }
  }, [validateDiscountData]);

  const handleDiscountCodeChange = evt => {
    const value = evt.target.value;
    setDiscountCode(value);
  }

  const handleAddDiscountCode = () => {
    validateDiscount({
      variables: { discountCode }
    });
  }

  return (
    <>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        className={classes.discountCodeWrap}
      >
        <Grid item xs={8} className={classes.discountCodeInputWrap}>
          <CssBorderlessInput
            variant="outlined"
            fullWidth
            label={t('order:coupon_code')}
            placeholder={t('order:coupon_code')}
            value={discountCode}
            onChange={handleDiscountCodeChange}
          />

          <Button
            className={classes.cancelBtn}
            variant="text"
            onClick={() => handleHidding(false)}
          >
            {isMobile ? <Cancel /> : t('cancel')}
          </Button>
        </Grid>

        <Grid item xs={4}
          className={[
            classes.discountCodeSubmitBtn,
            !!discountCode ? classes.activeSubmitBtn : classes.inactiveSubmitBtn
          ].join(' ')}
          onClick={handleAddDiscountCode}
        >
          {t('order:add_coupon_code')}
        </Grid>
      </Grid>

      {validateDiscountError && <Alert severity="error">{t('order:invalid_coupon')}</Alert>}
    </>
  );
}

export default AddDiscount;