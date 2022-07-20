import { routesArray } from '@form-exercise/utils';

export const getRoute = (pathname: string) =>
  routesArray.find((route) => route.path === pathname);
