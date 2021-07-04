import React, { memo, useMemo } from 'react';
import Grid from '@material-ui/core/Grid';
import { isEmpty } from 'lodash';
import InfoCell from '~/components/allItems/InfoCell/InfoCell';
import InfoLine from '~/components/allItems/InfoLine/InfoLine';
import InfoCard from '~/components/allItems/InfoCard/InfoCard';
import ModelBundles from '~/components/productModel/ModelBundles/model-bundles';
import { RentalInfoComponent as RentalInfoComponentInterface } from './interfaces';
import { useTranslation } from 'react-i18next';
import EditServicesModal from '~/components/fleet/edit-services-modal.component';
import { pricingStruncture } from '~/constants/taxes';

const RentalInfoComponent = ({
  data,
  loaded,
  services,
  onCheckService,
  onChangeService,
  onStartServiceEdit,
  onStopServiceEdit,
  onSubmitServicesChange,
  onStartRentalInfoEdition,
  onChangeRentalInfo,
  onCancelRentalInfoEdition,
  isRentalInfoEdition,
  onEditRentalInfo,
  onStartLeadServiceTimeEdition,
  onCancelLeadServiceTimeEdition,
  isLeadServiceTimeEdition,
}: RentalInfoComponentInterface): React.ReactElement => {
  const { t } = useTranslation();

  const calculateWeekendOptions = useMemo(
    () => [
      {
        id: 1,
        name: t('common:yes'),
      },
      {
        id: 0,
        name: t('common:no'),
      },
    ],
    [t]
  );

  return (
    <Grid container spacing={2}>
      {loaded && (
        <>
          <InfoCard
            title={t('common:tieredPrices')}
            isEditable
            isEdited={isRentalInfoEdition}
            onActivateEditMode={onStartRentalInfoEdition}
            onConfirmEdit={onEditRentalInfo}
            onCancelEdit={onCancelRentalInfoEdition}
          >
            <InfoLine>
              <InfoCell
                label={t('common:priceDaily')}
                value={data.priceDaily}
                isNumber
                isEditable={isRentalInfoEdition}
                onChange={onChangeRentalInfo('priceDaily')}
              />
              <InfoCell
                label={t('common:priceWeekly')}
                value={data.priceWeekly}
                isNumber
                isEditable={isRentalInfoEdition}
                onChange={onChangeRentalInfo('priceWeekly')}
              />
              <InfoCell
                label={t('common:priceMonthly')}
                value={data.priceMonthly}
                isNumber
                isEditable={isRentalInfoEdition}
                onChange={onChangeRentalInfo('priceMonthly')}
              />
              <InfoCell
                label={t('common:calculateWeekend')}
                value={(data.calculateWeekend ? t('common:yes') : t('common:no')) as string}
                options={calculateWeekendOptions}
                onChange={onChangeRentalInfo('calculateWeekend')}
                isEditable={isRentalInfoEdition}
                select
                selectedItemId={data.calculateWeekend ? 1 : 0}
              />
              <InfoCell label={t('common:tax')} value={`${pricingStruncture[1]}% MwSt.`} />
            </InfoLine>
          </InfoCard>
          <InfoCard
            title={t('common:leadTimeAndBlockTime')}
            isEditable
            isEdited={isLeadServiceTimeEdition}
            onActivateEditMode={onStartLeadServiceTimeEdition}
            onConfirmEdit={onEditRentalInfo}
            onCancelEdit={onCancelLeadServiceTimeEdition}
          >
            <InfoLine>
              <InfoCell
                label={t('common:leadTime')}
                value={data.leadTime}
                isNumber
                isEditable={isLeadServiceTimeEdition}
                onChange={onChangeRentalInfo('leadTime')}
              />
              <InfoCell
                label={t('common:blockTime')}
                value={data.serviceTime}
                isNumber
                isEditable={isLeadServiceTimeEdition}
                onChange={onChangeRentalInfo('serviceTime')}
              />
            </InfoLine>
          </InfoCard>
          <InfoCard title={t('common:services')} isEditable onActivateEditMode={onStartServiceEdit}>
            <InfoLine>
              {(data.services || []).map((service) => (
                <InfoCell key={service.id} label={service.name} value={service.value} />
              ))}
            </InfoLine>
          </InfoCard>
          {!isEmpty(data.attachments) && (
            <InfoCard title={t('common:attachments')}>
              <ModelBundles modelBundles={data.attachments} />
            </InfoCard>
          )}
        </>
      )}
      <EditServicesModal
        isModalOpen={Boolean(services)}
        services={services}
        onCheckService={onCheckService}
        onChangeService={onChangeService}
        onCancel={onStopServiceEdit}
        onSubmit={onSubmitServicesChange}
      />
    </Grid>
  );
};
export default memo(RentalInfoComponent);
