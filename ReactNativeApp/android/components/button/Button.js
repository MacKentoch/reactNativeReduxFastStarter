'use strict';
import React, {
  Component
}                     from 'react';
import {
  TouchableOpacity,
  View
}                     from 'react-native';
import shallowCompare from 'react-addons-shallow-compare';

class Button extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={this.props.style}
          onPress={this.handlePress} >
          <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            {this.props.children}
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  handlePress = (event) => {
    this.props.onPress(event);
  }
}


Button.propTypes = {
  style       : React.PropTypes.any,
  children    : React.PropTypes.node.isRequired,
  onPress     : React.PropTypes.func.isRequired
};


export default Button;
