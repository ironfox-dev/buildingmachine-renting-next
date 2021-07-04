import React, { ChangeEvent, ReactElement, useState } from 'react';
import { Tab } from '@material-ui/core';
import { TabPanel, TabContext, TabList } from '@material-ui/lab';
import { useTranslation } from 'react-i18next';

import useStyles from './verticalTabbable.style';
import { NavigationTabProps, ControlledPannelProps } from '~/shared/interfaces';
import { DynamicComponent } from '../index';

const useVerticalTabbable = (): {
  NavigationTab: ({ indicatorColor, textColor, items }: NavigationTabProps) => JSX.Element;
  ControlledPannel: ({ items }: ControlledPannelProps) => JSX.Element;
} => {
  const [activeTab, setActiveTab] = useState<string>('0');
  const classes = useStyles();
  const { t } = useTranslation();

  const handleChange = (event: ChangeEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  const NavigationTab = ({ indicatorColor, textColor, items }: NavigationTabProps): ReactElement => (
    <TabContext value={activeTab}>
      <TabList
        orientation="vertical"
        value={activeTab}
        onChange={handleChange}
        indicatorColor={indicatorColor}
        textColor={textColor}
        className={classes.tabContainer}
      >
        {items.map((item, i) => (
          <Tab
            label={t(item.label)}
            classes={{ wrapper: classes.wrapper, root: classes.root }}
            key={i}
            value={`${i}`}
          />
        ))}
      </TabList>
    </TabContext>
  );

  const ControlledPannel = ({ items }: ControlledPannelProps): ReactElement => (
    <TabContext value={activeTab}>
      {items.map((item, index) => (
        <TabPanel key={index} value={`${index}`} tabIndex={index}>
          {item.path && <DynamicComponent path={item.path} sections={item.sections} />}
        </TabPanel>
      ))}
    </TabContext>
  );

  return { NavigationTab, ControlledPannel };
};

export default useVerticalTabbable;
