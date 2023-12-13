import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <Icon icon="lucide:layout-dashboard" width="24" height="24" />,
  },
  {
    title: 'My Sites',
    path: '/mysites',
    icon: <Icon icon="lucide:laptop" width="24" height="24" />,
  },
  {
    title: 'My Courses',
    path: '/mycourses',
    icon: <Icon icon="lucide:tv-2" width="24" height="24" />,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Account', path: '/settings/account' },
      { title: 'Privacy', path: '/settings/privacy' },
    ],
  },
  
  
  {
    title: 'Help',
    path: '/help',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];
