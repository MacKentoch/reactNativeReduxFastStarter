'use strict';

import { Home }               from '../../scenes';
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
        enterHome: viewsActions.enterHome,
        leaveHome: viewsActions.leaveHome
      },
      dispatch
    );
};

/*
  if you don't use bindActionCreators
 */
// const mapDispatchToProps = (dispatch) => {
//   return {
//     enterHome: () => dispatch(viewsActions.enterHome()),
//     leaveHome: () => dispatch(viewsActions.leaveHome())
//   };
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
