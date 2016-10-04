'use strict';

import React, {
  PropTypes,
  Component
}                   from 'react';
import {
  StyleSheet,
  View,
  Text
}                   from 'react-native';


class Home extends Component {

  componentWillMount() {
    const { enterHome } = this.props;
    enterHome();
  }

  componentWillUnmount() {
    const { leaveHome } = this.props;
    leaveHome();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Home view
        </Text>
      </View>
    );
  }
}

Home.propTypes = {
  navigator:  PropTypes.object,
  navigate:   PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Home;
