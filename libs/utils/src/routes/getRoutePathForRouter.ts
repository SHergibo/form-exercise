import { RoutesDefinition } from './routes.type';

export const getRoutePathForRouter =
  <T extends string | symbol>(ROUTES: RoutesDefinition<T>) =>
  (target: T): string => {
    return ROUTES[target].path;
  };
