import update from 'immutability-helper'

import {
  SEARCH_QUERY_REQUEST,
  SEARCH_QUERY_SUCCESS,
  SEARCH_QUERY_FAILURE,
  GET_RUBYGEM_REQUEST,
  GET_RUBYGEM_SUCCESS,
  GET_RUBYGEM_FAILURE,
} from './actions'

const ACTION_HANDLERS = {
  [SEARCH_QUERY_REQUEST]: (search, action) => update(search, {searchQuery: {$set: action.searchQuery}}),
  [SEARCH_QUERY_SUCCESS]: (search, action) => update(search, {results: {$set: action.results}}),
  [SEARCH_QUERY_FAILURE]: (search, action) => search,
  [GET_RUBYGEM_REQUEST]: (search, action) => search,
  [GET_RUBYGEM_SUCCESS]: (search, action) => search,
  [GET_RUBYGEM_FAILURE]: (search, action) => search,
};

export const initialState = {
  searchQuery: '',
  results: []
};

function searchReducer(search = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(search, action) : search;
}


export default searchReducer
