'use strict';

import React, {
  Component
}                             from 'react';
import {
  StyleSheet,
  View,
  Text
}                             from 'react-native';

class AppState extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.enterAppState();
  }

  componentWillUnmount() {
    this.props.leaveAppState();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text>
            currentView:
            {this.props.currentView.currentView}
          </Text>
          <Text>
            enterTime:
            {this.props.currentView.enterTime}
          </Text>
          <Text>
            leaveTime:
            {this.props.currentView.leaveTime}
          </Text>
        </View>
      </View>
    );
  }
}

AppState.propTypes = {
  navigator     : React.PropTypes.object,
  navigate      : React.PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  subContainer: {
    flex:           1,
    flexDirection: 'column',
    marginTop:      80,
    paddingLeft:    5,
    paddingRight:   5
  }
});

export default AppState;
