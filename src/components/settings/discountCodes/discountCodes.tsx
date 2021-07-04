import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MaterialTable from 'material-table';
import { Box, Typography, Modal, Backdrop, Fade, Button, Grid, makeStyles } from '@material-ui/core';
import { ToggleButton } from '@material-ui/lab';
import { Add, Delete } from '@material-ui/icons';

import {
  useListDiscountsQuery,
  useCreateDiscountMutation,
  useDeleteDiscountMutation,
  useUpdateDiscountStatusMutation
} from '~/graphql/graphql'
import { TableIcons } from '~/components/icon/Table';
import { currencyFormat, percentageFormat } from '~/utils/format';
import { DiscountCode } from './discount.interface';
import useStyles from './discountCodes.style';
import { CssTextField, AmountDiscountField, PercentageDiscountField, StyledToggleButtonGroup, CustomSwitch } from '~/shared/index';
import { buttonCustomStyle } from '~/shared/inputFields/inputFields.styles';

const useStylesButtonCustom = makeStyles(buttonCustomStyle);

const defaultDiscountData = {
  id: '',
  code: '',
  type: 'PERCENTAGE',
  value: 0,
  currency: 'EUR',
  isActive: true
}

const DiscountCodes = (): React.ReactElement => {
  const inputClasses = useStylesButtonCustom();
  const classes = useStyles();
  const { t } = useTranslation(); 

  const { data: discountsListData, refetch: refetchListDiscounts } = useListDiscountsQuery();
  const [createDiscount] = useCreateDiscountMutation();
  const [deleteDiscount, { data: deleteDiscountData }] = useDeleteDiscountMutation();
  const [updateDiscountStatus, { data: updateDiscountStatusData }] = useUpdateDiscountStatusMutation();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [discounts, setDiscounts] = useState<DiscountCode[]>([]);
  const [discount, setDiscount] = useState<DiscountCode>(defaultDiscountData);

  useEffect(() => {
    if(!!discountsListData){
      refetchListDiscounts();
    }
  }, []);

  useEffect(() => {
    if(discountsListData?.listDiscounts){
      const items = discountsListData.listDiscounts.map(discount => ({
        id: discount.id,
        code: discount.code,
        type: discount.type,
        value: discount.value,
        currency: discount.currency,
        isActive: discount.isActive,
      }))

      setDiscounts(items);
    }  
  }, [discountsListData]);

  const toggleModal = (status: boolean) => setIsModalOpen(status);

  const handleDiscountType = (event: React.MouseEvent<HTMLElement>, newDiscountType: string | null) => {
    if (newDiscountType !== null) {
      const updates = {
        type: newDiscountType,
        value: discount.value,
      }

      if(newDiscountType === 'PERCENTAGE' && discount.value > 100){
        updates.value = 0;
      }

      setDiscount({
        ...discount,
        ...updates
      });
    }
  };

  const updateNewDiscount = (field, value) => {
    setDiscount({
      ...discount,
      [field]: value
    });
  }

  const createNewDiscountCode = async () => {
    const hasDuplicates = discounts.some(row => row.code === discount.code);

    if(!hasDuplicates){
      const {id, ...discountParams} = discount;

      try{
        const response = await createDiscount({
          variables: {
            discount: discountParams
          }
        });

        const newDiscount = response?.data?.createDiscount;

        if(newDiscount){
          setDiscounts([
            ...discounts,
            {
              id: newDiscount.id,
              code: newDiscount.code,
              type: newDiscount.type,
              value: newDiscount.value,
              currency: newDiscount.currency,
              isActive: newDiscount.isActive,
            }
          ]);
        }
    
        toggleModal(false);
        setDiscount(defaultDiscountData);
      }catch(err){
        console.log(err)
      }
    }else{
      alert(t('order:discount_code_duplicate'))
    }
  }

  const deleteDiscountCoupon = async (coupon: DiscountCode) => {
    try{
      const resp = await deleteDiscount({
        variables: { discountId: coupon.id }
      });

      if(deleteDiscountData?.deleteDiscount){
        const filteredDiscounts = discounts.filter(row => row.code !== coupon.code);
        setDiscounts(filteredDiscounts);
      }
    }catch(err){
      console.log(err);
    }
  }

  const handleDiscountSwitch = async (discountId, evt) => {
    const isActive = evt.target.checked;

    try{
      await updateDiscountStatus({
        variables: {
          discountId,
          isActive
        }
      });

      if(updateDiscountStatusData?.updateDiscountStatus){
        const filteredDiscounts = discounts.map(row => {
          if(row.id === discountId){
            row.isActive = isActive;
          }

          return row;
        });

        setDiscounts(filteredDiscounts);
      }
    }catch(err){
      console.log(err);
    }
  }

  const handleDiscountValueChange = evt => {
    let value = parseFloat(evt.target.value);

    if(discount.type === 'PERCENTAGE' && value > 100){
      value = 0;
    }

    updateNewDiscount('value', value);
  }
  
  return (
    <>
      <Box>
        <Grid container justify="flex-end">
          <Box mb={2}>
            <Button variant="contained" color="primary" onClick={() => toggleModal(true)}>
              <Add />
              {t('order:new_discount_coupon_code')}
            </Button>
          </Box>
        </Grid>

        <MaterialTable
          title={t('discounts')}
          icons={TableIcons}
          columns={[
            { field: 'code', title: t('order:discount_code') },
            { field: 'type', title: t('order:discount_type') },
            {
              field: 'value',
              title: t('order:discount_value'),
              render: (rowData: DiscountCode) => <Typography variant="body2">
                {rowData.type === 'AMOUNT' ? currencyFormat(rowData.value, rowData.currency) : percentageFormat(rowData.value)}
              </Typography>
            },
            {
              field: 'value',
              title: t('order:active'),
              render: (rowData: DiscountCode) => <Typography variant="body2">
                <CustomSwitch
                  checked={rowData.isActive}
                  onChange={evt => handleDiscountSwitch(rowData.id, evt)}
                />
              </Typography>
            },
          ]}
          data={discounts}
          options={{
            rowStyle: (e, index) => ({
              backgroundColor: index % 2 ? '#EEE' : '#FFF',
            }),
            pageSize: 10,
            actionsColumnIndex: -1,
            search: false
          }}
          actions={[
            {
              icon: Delete,
              tooltip: t('order:delete_discount_coupon'),
              onClick: (event, row) => deleteDiscountCoupon(row as DiscountCode),
            }
          ]}
        />
      </Box>

      <Modal
        open={isModalOpen}
        onClose={() => toggleModal(false)}
        aria-labelledby={t('order:new_discount_coupon_code')}
        aria-describedby={t('order:new_discount_coupon_code')}
        closeAfterTransition
        BackdropComponent={Backdrop}
        className={classes.modal}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isModalOpen}>
          <div className={classes.modelWrapper}>
            <Typography variant="h5" className={classes.title}>{t('order:new_discount_coupon_code')}</Typography>

            <Grid container alignItems="center" className={classes.body}>
              <CssTextField
                InputProps={{ classes: inputClasses, disableUnderline: true }}
                onChange={evt => updateNewDiscount('code', evt.target.value)}
                variant="filled"
                required
                value={discount.code}
                label={t('order:discount_code')}
                placeholder={t('order:discount_code')}
                name="code"
              />

              <StyledToggleButtonGroup
                exclusive
                value={discount.type}
                onChange={handleDiscountType}
                aria-label="discount-type"
                className={classes.toggleButton}
              >
                <ToggleButton value="PERCENTAGE" aria-label="PERCENTAGE">
                  %
                </ToggleButton>
                <ToggleButton value="AMOUNT" aria-label="AMOUNT">
                  €
                </ToggleButton>
              </StyledToggleButtonGroup>

              <CssTextField
                InputProps={{
                  inputComponent: (discount.type === 'AMOUNT' ? AmountDiscountField : PercentageDiscountField) as any,
                  classes: inputClasses,
                  disableUnderline: true
                }}
                onChange={handleDiscountValueChange}
                variant="filled"
                required
                value={discount.value}
                label={t('order:discount_value')}
                placeholder={t('order:discount_value')}
                name="value"
              />

              <CustomSwitch
                checked={discount.isActive}
                onChange={evt => updateNewDiscount('isActive', evt.target.checked)}
              />
            </Grid>

            <Grid container justify="flex-end" className={classes.footer}>
              <Button variant="outlined" color="default" className={classes.closeButton} onClick={() => toggleModal(false)}>
                {t('close')}
              </Button>

              <Button variant="contained" color="primary" onClick={createNewDiscountCode}>
                {t('save')}
              </Button>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </>
  )
}

export default DiscountCodes;