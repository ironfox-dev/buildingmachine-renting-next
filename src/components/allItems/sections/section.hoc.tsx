import React, { memo } from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import { useTranslation } from 'react-i18next';

import useStyles from './section.styles';
import { SectionProps } from '../interfaces';

const SectionHOC = ({ title, isEditable, onEditMode, children }: SectionProps): React.ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Grid className={classes.content} item xs={12}>
      <Grid container direction="row" justify="space-between" alignItems="center" className={classes.titleContent}>
        <Typography variant="h6">{t(title)}</Typography>
        {isEditable && (
          <IconButton color="inherit" onClick={onEditMode}>
            <EditIcon />
          </IconButton>
        )}
      </Grid>
      <Grid container spacing={3}>
        {children}
      </Grid>
    </Grid>
  );
};

export default memo(SectionHOC);
