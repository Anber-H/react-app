export default {
  fill (route, parent) {
    route.title = route.meta.title;
    route.key = route.path;

    if (route.path.indexOf('/') !== 0) {
      route.key = parent.path + '/' + route.path;
    }
    if (route.children) {
      route.subs = route.children.map((child) => this.fill(child, route));
    }
    console.log(route, 888)
    return route;
  },
  unpackage (routes) {
    return routes.reduce((_, route) => {
      if (route.component) {
        _ = _.concat({
          icon: route.icon,
          meta: route.meta,
          component: route.component,
          name: route.name,
          path: route.path
        });
      }

      if (route.children) {
        _ = _.concat(this.unpackage(route.children));
      }

      return _;
    }, []);
  },
}
