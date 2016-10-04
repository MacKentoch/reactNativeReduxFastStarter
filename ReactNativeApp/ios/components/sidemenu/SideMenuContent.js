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
import shallowCompare from 'react-addons-shallow-compare';
import { AppRoutes }  from '../../../common/config';
import SideMenuLink   from './SideMenuLink';

const window = Dimensions.get('window');
const routes = AppRoutes.getAllRoutes();

class SideMenuContent extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
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
          {
            routes.map(
              ({ id, sidemenu: { sideMenuButtonText, iconName, iconSize }}, idx) => {
                return (
                  <SideMenuLink
                    key={idx}
                    id={id}
                    iconName={iconName}
                    iconSize={iconSize}
                    handleNavButtonPress={this.handleNavButtonPress}
                    sideMenuButtonText={sideMenuButtonText}
                  />
                );
            })
          }
        </View>
      </ScrollView>
    );
  }

  handleNavButtonPress = (event, route) => {
    this.props.navigate(route);
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
    borderBottomWidth:  StyleSheet.hairlineWidth,
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
