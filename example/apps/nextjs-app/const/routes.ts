export const UN_NESTED_PAGE = {
  href: {
    pathname: 'unnested',
  },
};

export const USER_DETAIL1 = {
  href: {
    pathname: '/user/[id]',
    query: {
      id: '1',
    },
  },
};

export const USER_DETAIL2 = {
  href: {
    pathname: '/user/[id]',
    query: {
      id: '2',
    },
  },
};

export const USER_DETAIL3 = {
  href: {
    pathname: '/user/[id]',
    query: {
      id: '3',
    },
  },
};

export const MAIN_NAVI = [
  { route: '/', name: 'home' },
  { route: '/about/topTab1', name: 'about' },
  { route: '/user', name: 'users' },
];
export const SUB_NAVI = [
  { route: '/about/topTab1', name: 'topTab1' },
  { route: '/about/topTab2', name: 'topTab2' },
  { route: '/about/topTab3', name: 'topTab3' },
];
