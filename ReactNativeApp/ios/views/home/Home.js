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

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.enterHome();
  }

  componentWillUnmount() {
    this.props.actions.leaveHome();
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
)(Home);
