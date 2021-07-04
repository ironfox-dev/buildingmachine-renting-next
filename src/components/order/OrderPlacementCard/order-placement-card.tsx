import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link as MaterialLink } from '@material-ui/core';

import useSharedStyles from '../styles/styles';

const OrderPlacementCard = ({ children }: { children: React.ReactElement }): React.ReactElement => {
  const sharedClasses = useSharedStyles();
  const router = useRouter();
  const id = router.query.id as string;
  const { t } = useTranslation();

  return (
    <Card raised className={sharedClasses.card}>
      <CardContent>
        <Link href={`/product/${id}/personal-data`}>
          <MaterialLink classes={{ root: sharedClasses.link }}>&lt; {t('order:enter_personal_details')}</MaterialLink>
        </Link>

        <Typography variant="h3" className={sharedClasses.header} gutterBottom>
          {t('order:summary')}
        </Typography>

        {children}
      </CardContent>
    </Card>
  );
};

export default OrderPlacementCard;
