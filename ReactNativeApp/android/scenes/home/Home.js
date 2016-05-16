'use strict';

import React, {
  Component
}                             from 'react';
import {
  StyleSheet,
  View,
  Text
}                             from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.enterHome();
  }

  componentWillUnmount() {
    this.props.leaveHome();
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
  navigator     : React.PropTypes.object,
  navigate      : React.PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Home;
