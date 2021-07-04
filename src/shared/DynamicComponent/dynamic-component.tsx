import React, { memo } from 'react';
import dynamic from 'next/dynamic';

// TODO update interface after completing config
const DynamicComponent = (props: any): React.ReactElement => {
  const CustomComponent = dynamic(import(`../../components/${props.path}`));

  return <CustomComponent {...props} />;
};

export default memo(DynamicComponent);
