import { ActiveLink } from '@mononoke-choi/next-active-link';
import Link from 'next/link';
import React from 'react';
import { ACTIVE_CLASS_NAME } from '../constants/config';
import { TOP_TAB } from '../constants/routes';

const TopTab = () => {
  // todo convert to hook version
  return (
    <nav className="topTab">
      {TOP_TAB.map(({ name, href, matcher }) => (
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

export { TopTab };
