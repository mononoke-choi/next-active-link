import { ActiveLink } from '@mononoke-choi/next-active-link';
import Link from 'next/link';
import React from 'react';
import { ACTIVE_CLASS_NAME } from '../constants/config';
import { BOTTOM_TAB } from '../constants/routes';

const BottomTab = () => {
  return (
    <nav className="bottomTab">
      {BOTTOM_TAB.map(({ name, matcher, href }) => (
        <ActiveLink key={name} href={href} matcher={matcher}>
          {({ isActive }) => (
            <Link href={href}>
              <a className={isActive ? ACTIVE_CLASS_NAME : ''}>{name}</a>
            </Link>
          )}
        </ActiveLink>
      ))}
    </nav>
  );
};

export { BottomTab };
