import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link as MaterialLink } from '@material-ui/core';

import useSharedStyles from '../styles/styles';

const PersonalDataCard = ({ children }: { children: React.ReactElement }): React.ReactElement => {
  const sharedClasses = useSharedStyles();
  const router = useRouter();
  const id = router.query.id as string;
  const { t } = useTranslation();

  return (
    <Card raised className={sharedClasses.card}>
      <CardContent>
        <Link href={`/product/${id}/attachments-and-services`}>
          <MaterialLink classes={{ root: sharedClasses.link }}>
            &lt; {t('order:select_attachments_and_services')}
          </MaterialLink>
        </Link>

        <Typography variant="h3" className={sharedClasses.header} gutterBottom>
          {t('order:enter_personal_details')}
        </Typography>

        {children}
      </CardContent>
    </Card>
  );
};

export default PersonalDataCard;
