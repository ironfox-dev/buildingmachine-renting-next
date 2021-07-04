import React, { ReactElement, memo } from 'react';
import { useTranslation } from 'react-i18next';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToApp from '@material-ui/icons/ExitToApp';
import ClassIcon from '@material-ui/icons/Class';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PinDropIcon from '@material-ui/icons/PinDrop';
import PeopleIcon from '@material-ui/icons/People';
import AccountIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';

import useStyles from './sidebar-item-content.styles';

const iconContent = {
  ExitToApp: <ExitToApp />,
  ClassIcon: <ClassIcon />,
  DirectionsCarIcon: <DirectionsCarIcon />,
  EmojiTransportationIcon: <EmojiTransportationIcon />,
  ShoppingCartIcon: <ShoppingCartIcon />,
  PinDropIcon: <PinDropIcon />,
  PeopleIcon: <PeopleIcon />,
  AccountIcon: <AccountIcon />,
  SettingsIcon: <SettingsIcon />,
};

const SidebarItemContent = React.forwardRef(function SidebarItemContent(
  {
    title,
    icon,
    endIcon,
    active,
    onClick,
  }: {
    title: string;
    icon?: string;
    endIcon?: ReactElement;
    active?: boolean;
    isSub?: boolean;
    onClick?: () => void;
  },
  ref?: React.Ref<HTMLDivElement>
) {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <ListItem ref={ref} button className={active ? classes.active : ''} onClick={onClick}>
      {icon && <ListItemIcon className={classes.icon}>{iconContent[icon]}</ListItemIcon>}
      <ListItemText primary={t(title)} />
      {endIcon}
    </ListItem>
  );
});

export default memo(SidebarItemContent);
