import { Outlet } from "react-router-dom";
import { useState } from 'react';
import { Group } from '@mantine/core';
import {
  IconSettings,
  IconReceipt2,
  IconLogout,
  IconHome,
} from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './NavBar.module.css';

const data = [
  { link: '/home', label: 'Home', icon: IconHome },
  { link: '/billing', label: 'Billing', icon: IconReceipt2 },
  { link: '/settings', label: 'Settings', icon: IconSettings },
];

export function NavBar() {
  const [active, setActive] = useState('Home');

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <div style={{display: 'flex'}}>
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <MantineLogo size={28} />
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>

    <div id="detail">
      <Outlet />
    </div>
    </div>
  );
}