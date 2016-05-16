'use strict';

const routes = [{
  id                  : 1,
  refView             : 'HomeView',
  sidemenu: {
    sideMenuButtonText  : 'Home',
    iconType            : 'Ionicons',
    iconName            : 'ios-home-outline',
    iconSize            : 22,
  },
  navbar: {
    navBarTitle         : 'Home',
    navBarLeftIconName  : 'ios-menu',
    navBarLeftIconSize  : 32
  }
}, {
  id                  : 2,
  refView             : 'AppState',
  sidemenu: {
    sideMenuButtonText  : 'App State',
    iconType            : 'ionicons',
    iconName            : 'soup-can-outline',
    iconSize            : 22,
  },
  navbar: {
    navBarTitle         : 'App State',
    navBarLeftIconName  : 'ios-menu',
    navBarLeftIconSize  : 32
  }
}];


class AppRoutesClass {
  getRouteFromRouteId(routeId) {
    const routeFound = routes.find((route) => {
      if (route.id === routeId) {
        return route;
      }
    });
    return routeFound;
  }

  getAllRoutes() {
    return [].concat(routes);
  }
}


let AppRoutes = new AppRoutesClass();

export default AppRoutes;
