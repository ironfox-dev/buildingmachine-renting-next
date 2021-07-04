import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CheckIcon from '@material-ui/icons/Check';

import useStyles from './standard-attachments.styles';
import { StandardAttachmentsProps } from '../interfaces/interfaces';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

const StandardAttachments = ({ attachments, title, bordered }: StandardAttachmentsProps): React.ReactElement => {
  const classes = useStyles();

  const titleElement = (
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
  );

  const grid = (
    <Grid container justify="space-between">
      {attachments.map((attachment) => (
        <Grid container key={attachment} className={classes.item}>
          <CheckIcon fontSize="small" className={classes.icon} />
          <Typography variant="body1" gutterBottom>
            {attachment}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <>
      {bordered && (
        <Card variant="outlined">
          <CardContent classes={{ root: classes.cardContent }}>
            {title && titleElement}
            {grid}
          </CardContent>
        </Card>
      )}

      {!bordered && grid}
    </>
  );
};

export default StandardAttachments;
