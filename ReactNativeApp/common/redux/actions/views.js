'use strict';

export const ENTER_HOME_VIEW      = 'ENTER_HOME_VIEW';
export const LEAVE_HOME_VIEW      = 'LEAVE_HOME_VIEW';
export const ENTER_APPSTATE_VIEW  = 'ENTER_APPSTATE_VIEW';
export const LEAVE_APPSTATE_VIEW  = 'LEAVE_APPSTATE_VIEW';

export const enterHome = (time = new Date() + '') => {
  return {
    type:         ENTER_HOME_VIEW,
    currentView:  'home',
    enterTime:    time,
    leaveTime:    null
  };
};

export const leaveHome = (time = new Date() + '') => {
  return {
    type:         LEAVE_HOME_VIEW,
    currentView:  'home',
    enterTime:    null,
    leaveTime:    time
  };
};

export const enterAppState = (time = new Date() + '') => {
  return {
    type:         ENTER_APPSTATE_VIEW,
    currentView:  'appState',
    enterTime:    time,
    leaveTime:    null
  };
};

export const leaveAppState = (time = new Date() + '') => {
  return {
    type:         LEAVE_APPSTATE_VIEW,
    currentView:  'appState',
    enterTime:    null,
    leaveTime:    time
  };
};
