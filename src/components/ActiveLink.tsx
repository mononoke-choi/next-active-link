import { get, isArray, isUndefined } from 'lodash';
import { NextRouter } from 'next/dist/client/router';
import { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';

const resolveQueryWithDynamicPathname = (
  href: Route['href'] | Route['href'][],
) => {
  const processToAsPath = (route: Route['href']) => {
    const resolvedPathname: string = get(route, 'pathname', route);
    const resolvedQuery: ParsedUrlQuery = get(route, 'query', {});

    return Object.entries(resolvedQuery).reduce(
      (prevValue, [key, value]) =>
        prevValue.replace(`[${key}]`, value as string),
      resolvedPathname,
    );
  };

  if (isArray(href)) {
    return href.map(route => processToAsPath(route));
  } else {
    return processToAsPath(href);
  }
};

interface Route {
  href: LinkProps['href'];
  matcher?: (route: Route['href'], router: NextRouter) => boolean;
}

interface ActiveLinkProps extends Route {
  children: (props: {
    isActive: boolean;
    exact: boolean;
  }) => JSX.Element | null;
}

const ActiveLink = ({ href, children, matcher }: ActiveLinkProps) => {
  const router = useRouter();
  const { pathname: currentPathname } = router;

  if (isUndefined(href)) {
    throw new Error('you must pass href to ActiveLink component');
  }

  if (isUndefined(children)) {
    throw new Error('you must pass children to ActiveLink component');
  }

  // match exactly
  if (currentPathname === resolveQueryWithDynamicPathname(href)) {
    return children({
      isActive: true,
      exact: true,
    });
  }

  // match by matcher function
  if (matcher) {
    return children({
      isActive: matcher(href, router),
      exact: false,
    });
  }

  // doesn't match anything
  return children({
    isActive: false,
    exact: false,
  });
};

export default ActiveLink;
export { ActiveLinkProps, Route, resolveQueryWithDynamicPathname };
