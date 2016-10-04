'use strict';

import { AppState }           from '../../scenes';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as viewsActions      from '../../../common/redux/modules/views';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
      {
        enterAppState: viewsActions.enterAppState,
        leaveAppState: viewsActions.leaveAppState
      },
      dispatch
    );
};

/*
  if you don't use bindActionCreators
 */
// const mapDispatchToProps = (dispatch) => {
//   return {
//     enterAppState: () => dispatch(viewsActions.enterAppState()),
//     leaveAppState: () => dispatch(viewsActions.leaveAppState())
//   };
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppState);
