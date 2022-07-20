type RouteBase<T> = {
  path: string;
  title: string;
  routeName: string;
};

export type RoutesDefinition<T extends string | symbol> = Record<
  T,
  RouteBase<T>
>;
