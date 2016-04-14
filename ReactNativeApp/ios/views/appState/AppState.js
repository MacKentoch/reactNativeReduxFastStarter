'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Text
}               from 'react-native';

class AppState extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          AppState view
        </Text>
      </View>
    );
  }
}

// AppState.propTypes = {
//
// };

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default AppState;
