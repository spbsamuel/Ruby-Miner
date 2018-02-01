import update from 'immutability-helper'

import {
  VIEW_DETAILED,
  VIEW_FAVOURITES,
  VIEW_NESTED_DETAILED,
  POP_NESTED_VIEW
} from './actions'

const ACTION_HANDLERS = {
  [VIEW_DETAILED]: (dashboard, action) => update(dashboard, {inforPanelStack: {$set: [action.gemName]}}),
  [VIEW_FAVOURITES]: (dashboard, action) => update(dashboard, {inforPanelStack: {$set: [null]}}),
  [VIEW_NESTED_DETAILED]: (dashboard, action) => update(dashboard, {inforPanelStack: {$push: [action.gemName]}}),
  [POP_NESTED_VIEW]: (dashboard, action) => update(dashboard, {inforPanelStack: {$splice: [[dashboard.inforPanelStack.length-1, 1]]}}),
};

export const initialState = {
  inforPanelStack: [],
};

function dashboardReducer(dashboard = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(dashboard, action) : dashboard;
}


export default dashboardReducer
