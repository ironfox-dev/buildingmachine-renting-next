import React, { memo } from 'react';
import Grid from '@material-ui/core/Grid';

import { DynamicComponent } from '~/shared/index';
import { GeneralTabProps } from '../../interfaces';

const GeneralTab = (props: GeneralTabProps): React.ReactElement => {
  return (
    <Grid container>
      {props.sections.map((section) => {
        if (section.path) return <DynamicComponent key={section.component} path={section.path} label={section.label} />;
      })}
    </Grid>
  );
};

export default memo(GeneralTab);
