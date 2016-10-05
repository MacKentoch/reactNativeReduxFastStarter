'use strict';

import React, {
  Component
}                           from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  Navigator,
  DrawerLayoutAndroid
}                           from 'react-native';
import Icon                 from 'react-native-vector-icons/Ionicons';
import { AppRoutes }        from '../../../common/config';
import {
  DrawerContent,
  Button
}                           from '../../components';
import Home                 from '../home';
import AppState             from '../appState';


const SCREEN_WIDTH = Dimensions.get('window').width;
const DRAWER_WIDTH = SCREEN_WIDTH ? SCREEN_WIDTH * 0.8 : 300;
const DEFAULT_ROUTE = { id: 1, refView: 'HomeView' };

class App extends Component {

  state = {
    DrawerOpened: false,
    drawerWidth:  DRAWER_WIDTH
  };

  render() {
    return (
      <DrawerLayoutAndroid
        ref="drawer"
        drawerWidth={this.state.drawerWidth}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={
          () => {
            return (
              <DrawerContent
                openDrawer={this.openDrawer}
                closeDrawer={this.closeDrawer}
                navigate={this.navigate}
              />
            );
          }
        }
        openDrawer={this.handlesDrawerOpen}
        onDrawerOpen={this.onDrawerOpenEvent}
        closeDrawer={this.handlesDrawerClose}
        onDrawerClose={this.onDrawerCloseEvent}>
        <Navigator
          ref="navigator"
          initialRoute={ DEFAULT_ROUTE }
          sceneStyle={ styles.navigator }
          renderScene={this.renderScene}
          configureScene={this.configureScene}
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={this.renderRouteMapper()}
              style={styles.navBar}
            />
          }
        />
    </DrawerLayoutAndroid>
    );
  }

  configureScene = () => {
    return Navigator.SceneConfigs.FadeAndroid;
  }

  renderScene = (route, navigator) => {
    switch (route.id) {
    case 1:
      const route1 = AppRoutes.getRouteFromRouteId(1);
      return (
        <Home
          ref={route1.refView}
          navigator={navigator}
          navigate={(toRoute)=>this.navigate(toRoute)}
        />
      );
    case 2:
      const route2 = AppRoutes.getRouteFromRouteId(2);
      return (
        <AppState
          ref={route2.refView}
          navigator={navigator}
          navigate={(toRoute)=>this.navigate(toRoute)}
        />
      );
    default:
      return (
        <Home
          ref={route1.refView}
          navigator={navigator}
          navigate={(toRoute)=>this.navigate(toRoute)}
        />
      );
    }
  }

  renderRouteMapper() {
    const routes = AppRoutes.getAllRoutes();
    return  {
      Title : (route, navigator, index, navState) => {
        const currentRouteId  = navState.routeStack[index].id;
        return (
          <Text style={styles.titleNavText}>
            {routes[currentRouteId - 1].navbar.navBarTitle}
          </Text>
        );
      },
      LeftButton : (route, navigator, index, navState) => {
        const currentRouteId  = navState.routeStack[index].id;
        return (
          <Button
            style={styles.leftNavButton}
            onPress={(e)=>this.toggleDrawer(e)
            }>
            <Icon
              name={routes[currentRouteId - 1].navbar.navBarLeftIconName}
              size={32}
              color={'#333333'}
            />
          </Button>
        );
      },
      RightButton : (route, navigator, index, navState) => {
        return null;
      }
    };
  }

  navigate = (route) => {
    const routeStack = [...this.refs.navigator.getCurrentRoutes()];
    const previousRouteId = routeStack[routeStack.length - 1].id;
    if (route.id !== previousRouteId) {
      this.refs.navigator.replace(route);
    }

    if (this.state.DrawerOpened) {
      this.closeDrawer();
    }
  }

  handlesDrawerOpen = () => {
    // dismissKeyboard(); // when needed
  }

  onDrawerOpenEvent = () => {
    this.setState({
      DrawerOpened : true
    });
  }

  handlesDrawerClose = () => {
    // something specific to add here
  }

  onDrawerCloseEvent = () => {
    this.setState({
      DrawerOpened : false
    });
  }

  openDrawer = () => {
    if (this.state.DrawerOpened) {
      this.refs.drawer.openDrawer();
      this.setState({
        DrawerOpened: true
      });
    }
  }

  closeDrawer = () => {
    if (this.state.DrawerOpened) {
      this.refs.drawer.closeDrawer();
      this.setState({
        DrawerOpened : false
      });
    }
  }

  toggleDrawer = () => {
    if (this.state.DrawerOpened) {
      this.refs.drawer.closeDrawer();
    } else {
      this.refs.drawer.openDrawer();
    }
    this.setState({
      DrawerOpened: !this.state.DrawerOpened
    });
  }

  updateDrawerState(isOpened) {
    this.setState({
      DrawerOpened: isOpened
    });
  }
}

const styles = StyleSheet.create({
  navigator: {
    backgroundColor: '#fff',
  },
  navBar: {
    backgroundColor: '#fff',
    borderBottomWidth:      StyleSheet.hairlineWidth,
    borderBottomColor:    '#F1F1F1',
    elevation : 2
  },
  leftNavButton : {
    flex            : 1,
    flexDirection   : 'column',
    alignItems      : 'center',
    marginTop       : 5,
    paddingTop      : 10,
    paddingBottom   : 10,
    paddingLeft     : 10,
    paddingRight    : 10
  },
  rightNavButton : {
    flex            : 1,
    flexDirection   : 'column',
    alignItems      : 'center',
    marginTop       : 5,
    paddingTop      : 10,
    paddingBottom   : 10,
    paddingLeft     : 10,
    paddingRight    : 10
  },
  titleNavText : {
    marginTop   : 18,
    color       : '#333333'
  }
});

export default App;
