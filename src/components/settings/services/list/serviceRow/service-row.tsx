import React, { useState, useEffect } from 'react';
import {
  Grid,
  makeStyles,
  Checkbox,
  ButtonBase,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  FormControlLabel,
} from '@material-ui/core';
import CustomTextField from './custom-textField';
import CustomSelectBox from './custom-select';
import listStyle from '../list.style';
import { ServiceTemplate } from '../../helpers/interfaces';
import useFormHoc from '../../upsert/form-hoc';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useTranslation } from 'react-i18next';

const useListStyle = makeStyles(listStyle);

interface ServiceRowProps {
  serviceItem: ServiceTemplate;
  showSnackbar: (type: string, message: string) => void;
}
const ServiceRow = ({ serviceItem, showSnackbar }: ServiceRowProps): React.ReactElement => {
  const listClasses = useListStyle();
  const [noneEdit, setNoneEdit] = useState<boolean>(true);
  const [serviceName, setServiceName] = useState<string>(serviceItem.name);
  const [description, setDescription] = useState<string>(serviceItem.description);
  const [pricing, setPricing] = useState<string>(serviceItem.pricingStructure);
  const [isDefault, setIsDefault] = useState<boolean>(serviceItem.default);
  const [confirmModal, setConfirmModal] = useState<boolean>(false);
  const [includingWeekend, setIncludingWeekend] = useState<boolean>(serviceItem.includingWeekend);

  const { t } = useTranslation();

  useEffect(() => {
    if (noneEdit) {
      setServiceName(serviceItem.name);
      setDescription(serviceItem.description);
      setPricing(serviceItem.pricingStructure);
      setIsDefault(serviceItem.default);
      setIncludingWeekend(serviceItem.includingWeekend);
    } else {
      setServiceName(serviceName);
      setDescription(description);
      setPricing(pricing);
      setIsDefault(isDefault);
      setIncludingWeekend(includingWeekend);
    }
  }, [noneEdit]);

  useEffect(() => {
    setServiceName(serviceItem.name);
    setDescription(serviceItem.description);
    setPricing(serviceItem.pricingStructure);
    setIsDefault(serviceItem.default);
    setIncludingWeekend(serviceItem.includingWeekend);
  }, [serviceItem]);

  const formHoc = useFormHoc(
    {
      id: serviceItem.id,
      name: serviceName,
      pricingStructure: pricing,
      default: isDefault,
      description,
      includingWeekend,
    },
    false
  );

  const editService = () => {
    const editData: ServiceTemplate = {
      id: serviceItem.id,
      name: serviceName,
      pricingStructure: pricing,
      default: isDefault,
      description,
      includingWeekend,
    };
    formHoc.handleSubmit(editData);
    setNoneEdit(true);
  };

  const deleteService = () => {
    formHoc.handleDelete(serviceItem);
    setConfirmModal(false);
    showSnackbar('success', `A service ${serviceName} successfully deleted`);
  };
  return (
    <div className={listClasses.mainContainer}>
      <Dialog
        open={confirmModal}
        onClose={() => setConfirmModal(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <br /> {t('settings:confirm_delete')}
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => setConfirmModal(false)}>{t('settings:cancel')}</Button>
          <Button color="primary" onClick={() => deleteService()} autoFocus>
            {t('settings:delete')}
          </Button>
        </DialogActions>
      </Dialog>
      <Grid container className={listClasses.serviceRow}>
        <Grid item xs={3} className={listClasses.itemGrid}>
          <CustomTextField
            label={t('settings:service_name')}
            value={serviceName}
            variant="filled"
            readOnly={noneEdit}
            onChange={setServiceName}
          />
        </Grid>
        <Grid item xs={3} className={listClasses.itemGrid}>
          <CustomTextField
            onChange={setDescription}
            label={t('settings:description')}
            value={description}
            multiline
            variant="filled"
            readOnly={noneEdit}
          />
        </Grid>
        <Grid item xs={2} className={listClasses.itemGrid}>
          <CustomSelectBox readOnly={noneEdit} value={pricing} onChange={setPricing} />
        </Grid>
        <Grid item xs={4} container direction="row" alignItems="flex-start" className={listClasses.actionItemGrid}>
          <FormControlLabel
            value="end"
            control={
              <Checkbox
                checked={isDefault}
                color="secondary"
                onChange={() => {
                  !noneEdit ? setIsDefault(!isDefault) : null;
                }}
              />
            }
            label="Is Default"
            labelPlacement="top"
          />

          {pricing === 'daily' && (
            <FormControlLabel
              value="end"
              control={
                <Checkbox
                  checked={includingWeekend}
                  color="secondary"
                  onChange={() => {
                    !noneEdit ? setIncludingWeekend(!includingWeekend) : null;
                  }}
                />
              }
              label="Including Weekend"
              labelPlacement="top"
            />
          )}

          {noneEdit && (
            <div className={listClasses.actionIconContainer}>
              <ButtonBase className={listClasses.actionIconButton} onClick={() => setNoneEdit(false)}>
                <EditIcon />
              </ButtonBase>

              <ButtonBase className={listClasses.actionIconButton} onClick={() => setConfirmModal(true)}>
                <DeleteIcon />
              </ButtonBase>
            </div>
          )}
          {!noneEdit && (
            <div className={listClasses.actionIconContainer}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setNoneEdit(true)}
                className={listClasses.editActionButton}
              >
                {t('settings:cancel')}
              </Button>
              <Button
                onClick={() => editService()}
                variant="contained"
                color="primary"
                className={listClasses.editActionButton}
              >
                {t('settings:save')}
              </Button>
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default ServiceRow;
