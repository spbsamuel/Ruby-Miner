import update from 'immutability-helper'

import {
  VIEW_DETAILED,
  VIEW_FAVOURITES,
} from './actions'

const ACTION_HANDLERS = {
  [VIEW_DETAILED]: (dashboard, action) => update(dashboard, {currentGem: {$set: action.gemName}}),
  [VIEW_FAVOURITES]: (dashboard, action) => update(dashboard, {currentGem: {$set: ''}}),
};

export const initialState = {
  currentGem: '',
};

function dashboardReducer(dashboard = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(dashboard, action) : dashboard;
}


export default dashboardReducer
