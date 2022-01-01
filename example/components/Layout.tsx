import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
// import { ActiveLink } from '../../dist/esm/index';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const router = useRouter();
  const { pathname: currentPathname } = router;
  console.log(router);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          {/*<ActiveLink href={'/'}>*/}
          {/*  {({ isActive }) => (*/}
          {/*    <Link href={'/'}>*/}
          {/*      <a className={isActive ? 'active' : ''}>go home</a>*/}
          {/*    </Link>*/}
          {/*  )}*/}
          {/*</ActiveLink>{' '}*/}
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
          |{' '}
          <Link href="/about">
            <a>About</a>
          </Link>{' '}
          |{' '}
          <Link href="/users">
            <a>Users List</a>
          </Link>{' '}
          | <a href="/api/users">Users API</a>
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  );
};

export default Layout;
