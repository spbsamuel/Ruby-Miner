import update from 'immutability-helper'
import stateFromStorage from 'store/stateFromStorage'
import _merge from 'lodash/merge'

import {
  SEARCH_QUERY_REQUEST,
  SEARCH_QUERY_SUCCESS,
  SEARCH_QUERY_FAILURE,
  GET_RUBYGEM_REQUEST,
  GET_RUBYGEM_SUCCESS,
  GET_RUBYGEM_FAILURE,
  SET_GEM_FAVOURITES,
  SAVE_UNSAVE_SEARCHQUERY
} from './actions'

const ACTION_HANDLERS = {
  [SEARCH_QUERY_REQUEST]: (rubygems, action) => update(rubygems, {
    searchQuery: {$set: action.searchQuery},
    searchPending: {$set: true}
  }),
  [SEARCH_QUERY_SUCCESS]: (rubygems, action) => {
    if (rubygems.searchQuery === action.searchQuery)
      return update(rubygems, {
        results: {$set: action.results},
        searchPending: {$set: false},
        gems: {$merge: action.gems}
      });
    else
      return rubygems
  },
  [SEARCH_QUERY_FAILURE]: (rubygems, action) =>  update(rubygems, {searchPending: {$set: false}}),
  [GET_RUBYGEM_REQUEST]: (rubygems, action) => rubygems,
  [GET_RUBYGEM_SUCCESS]: (rubygems, action) => update(rubygems, {
    gems: {$merge: {[action.gemName]: action.response}},
  }),
  [GET_RUBYGEM_FAILURE]: (rubygems, action) => rubygems,
  [SET_GEM_FAVOURITES]: (rubygems, action) => {
    if (action.setAsFavourite) {
      return update(rubygems, {favourites: {$merge: {[action.gemName]: action.time}}})
    } else {
      return update(rubygems, {favourites: {$unset: [action.gemName]}})
    }
  },
  [SAVE_UNSAVE_SEARCHQUERY]: (rubygems, action) => {
    if (action.save) {
      return update(rubygems, {savedQueries: {$merge: {[action.searchQuery]: action.time}}})
    } else {
      return update(rubygems, {savedQueries: {$unset: [action.searchQuery]}})
    }
  },
};

export const initialState = _merge({
  searchPending: false,
  searchQuery: '',
  results: [],
  gems: {},
  favourites: {},
  savedQueries: {}
}, stateFromStorage('favourites', 'gems', 'savedQueries'));

function rubygemsReducer(rubygems = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(rubygems, action) : rubygems;
}


export default rubygemsReducer
