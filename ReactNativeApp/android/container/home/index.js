'use strict';

import { Home }                 from '../../scenes';
import { connect }              from 'react-redux';
import * as actions             from '../../../common/redux/actions';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    enterHome: () => dispatch(actions.enterHome()),
    leaveHome: () => dispatch(actions.leaveHome())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
