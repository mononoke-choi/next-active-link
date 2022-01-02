import Link from 'next/link';
import React from 'react';
import { ActiveLink } from '../../../../dist/esm/index';
import { ACTIVE_CLASS_NAME } from '../const/config';
import { MAIN_NAVI } from '../const/routes';

const BottomTab = () => {
  return (
    <nav className="bottomTab">
      {MAIN_NAVI.map(({ name, route }) => (
        <ActiveLink key={route} href={route}>
          {({ isActive }) => (
            <Link href={route}>
              <a className={isActive ? ACTIVE_CLASS_NAME : ''}>{name}</a>
            </Link>
          )}
        </ActiveLink>
      ))}
    </nav>
  );
};

export { BottomTab };
