'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView
}               from 'react-native';

const window    = Dimensions.get('window');

class SideMenuContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView
        style={[styles.container,{backgroundColor: this.props.backGndColor}]}
        scrollsToTop={false}>
        <View style={styles.content}>
          <Text>
            SideMenu content
          </Text>
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
  content: {
    flex:           1,
    flexDirection: 'row',
    alignItems:    'center',
    height:   window.height / 2,
  }
});

export default SideMenuContent;
