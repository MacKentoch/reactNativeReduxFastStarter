'use strict';

import moment  from 'moment';

///////////////////////
// constants
///////////////////////
const ENTER_HOME_VIEW      = 'ENTER_HOME_VIEW';
const LEAVE_HOME_VIEW      = 'LEAVE_HOME_VIEW';
const ENTER_APPSTATE_VIEW  = 'ENTER_APPSTATE_VIEW';
const LEAVE_APPSTATE_VIEW  = 'LEAVE_APPSTATE_VIEW';

///////////////////////
// reducer
///////////////////////
const initialState = {
  currentView:  'not set',
  enterTime:    null,
  leaveTime:    null
};

export default function(state = initialState, action) {

  switch (action.type) {

  case 'ENTER_HOME_VIEW':
  case 'ENTER_APPSTATE_VIEW':
    // can't enter if you are already inside
    if (state.currentView !== action.currentView) {
      return {
        ...state,
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      };
    }
    return state;

  case 'LEAVE_HOME_VIEW':
  case 'LEAVE_APPSTATE_VIEW':
    // can't leave if you aren't already inside
    if (state.currentView === action.currentView) {
      return {
        ...state,
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      };
    }
    return state;

  default:
    return state;
  }
}


///////////////////////
// actions creators
///////////////////////
export function enterHome(time = moment().format()) {
  return {
    type:         ENTER_HOME_VIEW,
    currentView:  'home',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveHome(time = moment().format()) {
  return {
    type:         LEAVE_HOME_VIEW,
    currentView:  'home',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterAppState(time = moment().format()) {
  return {
    type:         ENTER_APPSTATE_VIEW,
    currentView:  'appState',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveAppState(time = moment().format()) {
  return {
    type:         LEAVE_APPSTATE_VIEW,
    currentView:  'appState',
    enterTime:    null,
    leaveTime:    time
  };
}
