import React, { memo } from 'react';
import { InfoLineComponent } from '../interfaces';

import Grid from '@material-ui/core/Grid';

const InfoLine = ({ children }: InfoLineComponent): React.ReactElement => {
  return (
    <Grid container direction="row" alignItems="stretch">
      {children.map((component, index) => (
        <Grid key={index} container direction="column" alignItems="flex-start" justify="flex-end" xs>
          {component}
        </Grid>
      ))}
    </Grid>
  );
};

export default memo(InfoLine);
