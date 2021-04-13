export default {
  fill (route, parent) {
    if (!route.name) {
      route.name = route.path.replace(/^\//, '');
    }
    if (parent) {
      route.name = parent.name + '/' + route.path;
      if (route.path.indexOf('/') !== 0) {
        route.path = parent.path + '/' + route.path;
      }
    }
    route['data-name'] = 'path_' + route.name;
    if (route.children) {
      route.children = route.children.map((child) => this.fill(child, route));
    }
    return route;
  }
}
