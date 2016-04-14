'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Text
}               from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
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

// Home.propTypes = {
//
// };

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Home;
