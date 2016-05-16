'use strict';

import React, {
  Component
}                     from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView
}                     from 'react-native';
import Button         from '../button/Button';
import { AppRoutes }  from '../../../common/config';

const window    = Dimensions.get('window');

class SideMenuContent extends Component {
  constructor(props) {
    super(props);
  }

  handleNavButtonPress(event, route) {
    this.props.navigate(route);
  }

  renderSideMenuButtons() {
    const routes          = AppRoutes.getAllRoutes();
    const SideMenuButtons = routes.map((route) => {

      return (
        <View
          style={styles.rowContent}
          key={route.id}>
          <Button
            style={[styles.navButton]}
            onPress={(e)=>this.handleNavButtonPress(e, {id : route.id})} >
            <Text style={styles.navButtonText}>
              {route.sidemenu.sideMenuButtonText}
            </Text>
          </Button>
        </View>
      );
    });
    return SideMenuButtons;
  }

  render() {
    return (
      <ScrollView
        style={[styles.container,{backgroundColor: this.props.backGndColor}]}
        scrollsToTop={false}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            SideMenu header here
          </Text>
        </View>
        <View style={styles.menusContainer}>
          {this.renderSideMenuButtons()}
        </View>
      </ScrollView>
    );
  }
}

SideMenuContent.propTypes = {
  backGndColor: React.PropTypes.string
};

SideMenuContent.defaultProps = {
  backGndColor: '#fff'
};

const styles = StyleSheet.create({
  container: {
    flex:     1,
    width:    window.width,
    height:   window.height,
    padding:  5
  },
  headerContainer: {
    flex:               1,
    flexDirection:      'row',
    height:             30,
    marginTop:          20,
    borderBottomWidth:  0.5,
    borderBottomColor: '#333333'
  },
  headerText: {
    paddingTop:    5,
    paddingBottom: 5,
    paddingLeft:   2,
    paddingRight:  2
  },
  menusContainer: {
    flex:           1,
    height:         window.height / 2,
    paddingTop:     5,
    paddingBottom:  5,
    flexDirection:  'column'
  },
  rowContent: {
    height:         50,
    flexDirection: 'row',
    alignItems:    'center'
  }
});

export default SideMenuContent;
