import { NextRouter } from 'next/dist/client/router';
import { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { UrlObject } from 'url';

function isUndefined(value: any): value is undefined {
  return value === undefined;
}

function isNull(value: any): value is null {
  return value === null;
}

function isInvalidValue(value: any): value is null | undefined {
  return isNull(value) || isUndefined(value);
}

function isUrlObject(value: string | UrlObject): value is UrlObject {
  return typeof value !== 'string';
}

const resolveQueryWithDynamicPathname = (
  href: Route['href'] | Route['href'][],
) => {
  const processToAsPath = (route: Route['href']) => {
    const resolvedPathname = isUrlObject(route) ? route.pathname : route;
    const resolvedQuery = isUrlObject(route) ? route.query : {};

    if (isInvalidValue(resolvedPathname) || isInvalidValue(resolvedQuery)) {
      throw new Error(
        'you must pass valid pathname or query value to ActiveLink component',
      );
    }

    return Object.entries(resolvedQuery).reduce(
      (prevValue, [key, value]) =>
        prevValue.replace(`[${key}]`, value as string),
      resolvedPathname,
    );
  };

  if (Array.isArray(href)) {
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
