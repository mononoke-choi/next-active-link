import { get, isUndefined } from 'lodash';
import { NextRouter } from 'next/dist/client/router';
import { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

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

const ActiveLink = ({
  href: passedHref,
  children,
  matcher,
}: ActiveLinkProps) => {
  const router = useRouter();
  const { pathname: currentPathname } = router;
  const currentRoute: string = get(passedHref, 'pathname', passedHref);

  if (isUndefined(passedHref)) {
    throw new Error('you must pass href to ActiveLink component');
  }

  if (isUndefined(children)) {
    throw new Error('you must pass children to ActiveLink component');
  }

  // match exactly
  if (currentPathname === currentRoute) {
    return children({
      isActive: true,
      exact: true,
    });
  }

  // match by matcher function
  if (matcher) {
    return children({
      isActive: matcher(currentRoute, router),
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
export { ActiveLinkProps, Route };
