import { UrlObject } from 'url';
import { Route } from '../components/ActiveLink';

export function isUndefined(value: any): value is undefined {
  return value === undefined;
}

function isNull(value: any): value is null {
  return value === null;
}

export function isInvalidValue(value: any): value is null | undefined {
  return isNull(value) || isUndefined(value);
}

export function isUrlObject(value: string | UrlObject): value is UrlObject {
  return typeof value !== 'string';
}

export function resolveQueryWithDynamicPathname(
  href: Route['href'] | Route['href'][],
) {
  const resolveToAsPath = (route: Route['href']) => {
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
    return href.map(route => resolveToAsPath(route));
  } else {
    return resolveToAsPath(href);
  }
}
