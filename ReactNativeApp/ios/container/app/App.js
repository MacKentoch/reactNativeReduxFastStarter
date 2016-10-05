'use strict';

import React, {
  Component
}                           from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  Navigator,
  StatusBar
}                           from 'react-native';
import SideMenu             from 'react-native-side-menu';
import Icon                 from 'react-native-vector-icons/Ionicons';
import { AppRoutes }        from '../../../common/config';
import {
  SideMenuContent,
  Button
}                           from '../../components';
import Home                 from '../home';
import AppState             from '../appState';


const SCREEN_WIDTH = Dimensions.get('window').width;
const OPEN_SIDE_MENU_OFFSET = SCREEN_WIDTH * 0.8;
const DEFAULT_ROUTE = { id: 1, refView: 'HomeView' };

/*
  set iOS StatusBar style:
 */
StatusBar.setBarStyle('default', true);
// StatusBar.setBarStyle('light-content', true);

class App extends Component {

  state = {
    sideMenuOpened: false
  };

  render() {
    const { sideMenuOpened } = this.state;

    return (
      <SideMenu
        menu={<SideMenuContent
                backGndColor="#ECECEC"
                navigate={this.navigate}
              />}
        isOpen={sideMenuOpened}
        onChange={this.updateSideMenuState}
        bounceBackOnOverdraw={false}
        openMenuOffset={OPEN_SIDE_MENU_OFFSET}
        >
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
      </SideMenu>
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
          navigate={this.navigate}
        />
      );
    case 2:
      const route2 = AppRoutes.getRouteFromRouteId(2);
      return (
        <AppState
          ref={route2.refView}
          navigator={navigator}
          navigate={this.navigate}
        />
      );
    default:
      return (
        <Home
          ref={route1.refView}
          navigator={navigator}
          navigate={this.navigate}
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
            onPress={this.toggleSideMenu}>
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

    if (this.state.sideMenuOpened) {
      this.closeSideMenu();
    }
  }

  updateSideMenuState = (isOpened) => {
    this.setState({
      sideMenuOpened: isOpened
    });
  }

  toggleSideMenu = () => {
    this.setState({
      sideMenuOpened: !this.state.sideMenuOpened
    });
  }

  openSideMenu = () => {
    this.setState({
      sideMenuOpened : false
    });
  }

  closeSideMenu = () => {
    if (this.state.sideMenuOpened) {
      this.setState({
        sideMenuOpened : false
      });
    }
  }
}

const styles = StyleSheet.create({
  navigator: {
    backgroundColor: '#fff'
  },
  navBar: {
    backgroundColor: '#fff',
    borderBottomWidth:      StyleSheet.hairlineWidth,
    borderBottomColor:    '#F1F1F1'
  },
  leftNavButton : {
    flex            : 1,
    flexDirection   : 'column',
    alignItems      : 'center',
    marginTop       : 4,
    paddingTop      : 0,
    paddingBottom   : 10,
    paddingLeft     : 20,
    paddingRight    : 10
  },
  rightNavButton : {
    flex            : 1,
    flexDirection   : 'column',
    alignItems      : 'center',
    marginTop       : 4,
    paddingTop      : 6,
    paddingBottom   : 10,
    paddingLeft     : 10,
    paddingRight    : 10
  },
  titleNavText : {
    marginTop   : 14,
    color       : '#333333'
  }
});

export default App;
