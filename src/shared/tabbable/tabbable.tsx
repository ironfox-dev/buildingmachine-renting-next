import React, { ChangeEvent, ReactElement, useState } from 'react';
import { Tabs, Tab, Paper } from '@material-ui/core';
import { TabPanel, TabContext } from '@material-ui/lab';

import useStyles from './tabbable.styles';

interface TabsProps {
  defaultTab?: string
  indicatorColor?: "primary" | "secondary"
  textColor?: "primary" | "secondary" | "inherit"
  items: Array<{
    key: string
    label: string
    children: ReactElement
  }>
}

const Tabbable = ({
  defaultTab,
  indicatorColor = 'primary',
  textColor = 'primary',
  items,
}: TabsProps): ReactElement => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState<string>(defaultTab || '');

  const handleChange = (event: ChangeEvent<{}>, newValue: string) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <Paper className={classes.tabs}>
        <Tabs
          value={activeTab}
          onChange={handleChange}
          indicatorColor={indicatorColor}
          textColor={textColor}
          centered
        >
          {items.map(item => (
            <Tab
              className={classes.tab}
              key={`tab-${item.key}`}
              value={item.key}
              label={item.label}
            />
          ))}
        </Tabs>
      </Paper>

      <TabContext value={activeTab}>
        {items.map((item, index) => (
          <TabPanel
            className={classes.tabPanel}
            key={`tab-panel-${item.key}`}
            value={item.key}
            tabIndex={index}
          >
            {item.children}
          </TabPanel>
        ))}
      </TabContext>
    </>
  )
}

export default Tabbable;