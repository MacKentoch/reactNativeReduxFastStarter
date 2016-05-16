'use strict';

import { AppState }             from '../../scenes';
import { connect }              from 'react-redux';
import * as actions             from '../../../common/redux/actions';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    enterAppState: () => dispatch(actions.enterAppState()),
    leaveAppState: () => dispatch(actions.leaveAppState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppState);
