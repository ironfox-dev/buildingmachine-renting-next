import React, { ReactElement, memo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import SidebarItemContent from '../SidebarItemContent/sidebar-item-content';

interface subItem {
  title: string;
  path: string;
}

interface SidebarItemProps {
  route: {
    key: number;
    path: string;
    title: string;
    icon: string;
    component: string;
    sub_items?: subItem[];
  };
}

const SidebarItem = function ({ route }: SidebarItemProps): ReactElement {
  const router = useRouter();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const setActiveClass = (itemPath) => {
    return `/${router.pathname.split('/')[1]}` === itemPath;
  };

  let singleItem;
  let subItemBlock;
  if (!(route.sub_items && route.sub_items.length)) {
    singleItem = (
      <Link href={route.path} passHref>
        <SidebarItemContent title={route.title} icon={route.icon} active={setActiveClass(route.path)} />
      </Link>
    );
  }

  if (route.sub_items && route.sub_items.length) {
    subItemBlock = (
      <>
        <SidebarItemContent
          title={route.title}
          icon={route.icon}
          endIcon={open ? <ExpandLess /> : <ExpandMore />}
          active={router.pathname === route.path}
          onClick={handleClick}
        />

        <Collapse in={open} timeout="auto" unmountOnExit>
          {route.sub_items.map((subItem) => (
            <Link key={subItem.title} href={subItem.path}>
              <SidebarItemContent title={subItem.title} active={setActiveClass(subItem.path)} />
            </Link>
          ))}
        </Collapse>
      </>
    );
  }

  return (
    <>
      {singleItem}

      {subItemBlock}
    </>
  );
};

export default memo(SidebarItem);
