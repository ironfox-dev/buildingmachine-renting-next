import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link as MaterialLink } from '@material-ui/core';

import useSharedStyles from '../styles/styles';
import { AttachmentsCardProps } from '../interfaces/interfaces';
import ExtraItem from '../ExtraItem/extra-item';
import StandardAttachments from '../StandardAttachments/standard-attachments';

const AttachmentsCard = ({
  services,
  selectedServiceIds,
  handleServiceSelect,
  handleServiceUnselect,
  standardAttachments,
  bundles = [],
  selectedBundlesIds,
  businessDays,
  handleBundlesSelect,
  handleBundlesUnselect,
  productModelKey,
}: AttachmentsCardProps): React.ReactElement => {
  const sharedClasses = useSharedStyles();
  const { t } = useTranslation();

  const [days, setDays] = useState(0);
  useEffect(() => {
    if (businessDays) setDays(businessDays);
  }, [businessDays]);

  return (
    <Card raised className={sharedClasses.card}>
      <CardContent>
        <Link href={`/product/${productModelKey}/machine`}>
          <MaterialLink classes={{ root: sharedClasses.link }}>&lt; {t('order:select_machine')}</MaterialLink>
        </Link>

        <Typography variant="h3" className={sharedClasses.header} gutterBottom>
          {t('order:select_attachment_and_service')}
        </Typography>

        {!!standardAttachments?.length && (
          <StandardAttachments bordered attachments={standardAttachments} title={t('order:included_in_delivery')} />
        )}

        {!!bundles.length && (
          <Typography variant="h4" className={sharedClasses.subheader}>
            {t('order:attachment')}
          </Typography>
        )}

        {bundles.map((bundle) => {
          const manufacturer = bundle.manufacturer.abbreviation || bundle.manufacturer.name;
          let price = bundle.products[0].priceDaily?.toString();
          if (days >= 5) price = bundle.products[0].priceWeekly?.toString();
          if (days >= 20) price = bundle.products[0].priceMonthly?.toString();

          return (
            <ExtraItem
              key={bundle.id}
              title={`${manufacturer} ${bundle.type.name} ${bundle.name}`}
              description={bundle.attributes.accessories.join(' | ')}
              price={price}
              pricingStructure="daily"
              selected={selectedBundlesIds.includes(bundle.id)}
              handleSelect={() => handleBundlesSelect(bundle.id)}
              handleUnselect={() => handleBundlesUnselect(bundle.id)}
            />
          );
        })}

        {!!services.length && (
          <Typography variant="h4" className={sharedClasses.subheader}>
            {t('order:extras')}
          </Typography>
        )}

        {services.map((service) => {
          return (
            <ExtraItem
              key={service.id}
              title={service.serviceTemplate.name}
              description={service.serviceTemplate.description}
              price={service.price}
              pricingStructure={service.serviceTemplate.pricingStructure}
              selected={selectedServiceIds.includes(service.id)}
              handleSelect={() => handleServiceSelect(service.id)}
              handleUnselect={() => handleServiceUnselect(service.id)}
            />
          );
        })}
      </CardContent>
    </Card>
  );
};

export default AttachmentsCard;
