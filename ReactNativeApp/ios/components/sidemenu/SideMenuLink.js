'use strict';

import React, {
  Component,
  PropTypes
}                           from 'react';
import {
  StyleSheet,
  View,
  Text
}                           from 'react-native';
import Icon                 from 'react-native-vector-icons/Ionicons';
import shallowCompare       from 'react-addons-shallow-compare';
import Button               from '../button/Button';

class SideMenuLink extends Component  {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render () {
    const {sideMenuButtonText, iconName, iconSize} = this.props;
    return (
      <View style={styles.rowContent}>
        <Button
          style={styles.navButton}
          onPress={this.handleNavButtonPress} >
          <Icon
            name={iconName}
            size={iconSize}
            color="#333"
            style={styles.icons}
          />
          <Text style={styles.navButtonText}>
            {sideMenuButtonText}
          </Text>
        </Button>
      </View>
    );
  }

  handleNavButtonPress = (e) => {
    const { id, handleNavButtonPress } = this.props;
    handleNavButtonPress(e, {id});
  }

}

const styles = StyleSheet.create({
  rowContent: {
    height: 50
  },
  icons: {
    marginRight: 5,
    marginLeft: 10
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10
  },
  navButtonText: {
    color: '#333333',
    fontSize: 16,
    fontWeight: '400'
  }
});

SideMenuLink.propTypes = {
  id: PropTypes.number.isRequired,
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number.isRequired,
  handleNavButtonPress: PropTypes.func.isRequired,
  sideMenuButtonText: PropTypes.string.isRequired
};

export default SideMenuLink;
