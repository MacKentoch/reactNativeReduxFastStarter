'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Text
}                             from 'react-native';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as viewsActions      from '../../../common/redux/actions';

class AppState extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.enterAppState();
  }

  componentWillUnmount() {
    this.props.actions.leaveAppState();
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

const mapStateToProps = (state) => {
  return {
    currentView:  state.views
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        ...viewsActions
      },
      dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppState);
