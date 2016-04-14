'use strict';

export const ENTER_HOME_VIEW  = 'ENTER_HOME_VIEW';
export const LEAVE_HOME_VIEW  = 'LEAVE_HOME_VIEW';

export const enterHome = (time = new Date()) => {
  return {
    type:         ENTER_HOME_VIEW,
    currentView:  'home',
    enterTime:    time,
    leaveTime:    null
  };
};

export const leaveHome = (time = new Date()) => {
  return {
    type:         LEAVE_HOME_VIEW,
    currentView:  'home',
    enterTime:    null,
    leaveTime:    time
  };
};
