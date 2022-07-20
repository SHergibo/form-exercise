import { i18nKeys } from '@form-exercise/i18n';
import { getRoute } from '@form-exercise/utils';

interface GetRouteTitle {
  pathname: string;
}

export const getRouteTitle = ({ pathname }: GetRouteTitle): string => {
  const route = getRoute(pathname);

  if (route) {
    return route.routeName;
  } else {
    return i18nKeys.menu.title.notFound;
  }
};
