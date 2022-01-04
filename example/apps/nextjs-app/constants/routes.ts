import {
  resolveQueryWithDynamicPathname,
  Route,
} from '@mononoke-choi/next-active-link';

const ROUTE_STRUCTURE = {
  HOME: '/',
  USER: {
    INDEX: '/user',
    USER_DETAIL: '/user/[id]',
    NESTED_DYNAMIC_PAGE: '/user/[id]/[age]',
  },
  ABOUT: {
    TOPTAB_1: '/about/topTab1',
    TOPTAB_2: '/about/topTab2',
    TOPTAB_3: '/about/topTab3',
  },
  UN_NESTED_PAGE: 'unnested',
};

interface MyRoute extends Route {
  name: string;
  additionalRouteInfo?: unknown;
}

export const HOME: MyRoute = {
  href: { pathname: ROUTE_STRUCTURE.HOME },
  name: 'home',
  matcher: (route, { asPath }) => asPath === '/unnested',
};

export const ABOUT: MyRoute = {
  href: { pathname: ROUTE_STRUCTURE.ABOUT.TOPTAB_1 },
  name: 'ABOUT',
  matcher: (route, { asPath }) =>
    [ROUTE_STRUCTURE.ABOUT.TOPTAB_2, ROUTE_STRUCTURE.ABOUT.TOPTAB_3].includes(
      asPath
    ),
};

export const USER: MyRoute = {
  href: ROUTE_STRUCTURE.USER.INDEX,
  name: 'USER',
  matcher: (route, { asPath }) => new RegExp(route + '/.+').test(asPath),
};

export const UN_NESTED_PAGE: MyRoute = {
  href: {
    pathname: ROUTE_STRUCTURE.UN_NESTED_PAGE,
  },
  name: 'UN_NESTED',
};

export const USER_DETAIL1: MyRoute = {
  href: {
    pathname: ROUTE_STRUCTURE.USER.USER_DETAIL,
    query: {
      id: '1',
    },
  },
  name: 'USER_DETAIL1',
  matcher: (route, { asPath }) =>
    resolveQueryWithDynamicPathname(route) === asPath,
};

export const USER_DETAIL2: MyRoute = {
  href: {
    pathname: ROUTE_STRUCTURE.USER.USER_DETAIL,
    query: {
      id: '2',
    },
  },
  name: 'USER_2',
};

export const USER_DETAIL3: MyRoute = {
  href: {
    pathname: ROUTE_STRUCTURE.USER.NESTED_DYNAMIC_PAGE,
    query: {
      id: '3',
      age: '20',
    },
  },
  name: 'USER_3',
};

export const TOPTAB_1: MyRoute = {
  href: {
    pathname: ROUTE_STRUCTURE.ABOUT.TOPTAB_1,
  },
  name: 'TOPTAB_1',
};

export const TOPTAB_2: MyRoute = {
  href: {
    pathname: ROUTE_STRUCTURE.ABOUT.TOPTAB_2,
  },
  name: 'TOPTAB_2',
};

export const TOPTAB_3: MyRoute = {
  href: {
    pathname: ROUTE_STRUCTURE.ABOUT.TOPTAB_3,
  },
  name: 'TOPTAB_3',
};

export const BOTTOM_TAB = [HOME, ABOUT, USER, USER_DETAIL1];
export const TOP_TAB = [TOPTAB_1, TOPTAB_2, TOPTAB_3];
