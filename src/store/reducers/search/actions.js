import apiEndpoints from './apiEndpoints'


export const SEARCH_QUERY_REQUEST = 'SEARCH_QUERY_REQUEST';
export const SEARCH_QUERY_SUCCESS = 'SEARCH_QUERY_SUCCESS';
export const SEARCH_QUERY_FAILURE = 'SEARCH_QUERY_FAILURE';

export function searchRubyGems(searchQuery) {
  return (
    dispatch => {
      dispatch({
        type: SEARCH_QUERY_REQUEST,
        searchQuery
      });

      apiEndpoints.search(searchQuery)
        .then(response => {
          dispatch({
            type: SEARCH_QUERY_SUCCESS,
            results: response
          })
        })
        .catch(
          dispatch
          ({
            type: SEARCH_QUERY_FAILURE,

          })
        );
    }
  )
}

export const GET_RUBYGEM_REQUEST = 'GET_RUBYGEM_REQUEST';
export const GET_RUBYGEM_SUCCESS = 'GET_RUBYGEM_SUCCESS';
export const GET_RUBYGEM_FAILURE = 'GET_RUBYGEM_FAILURE';

export function requestRubyGem(gemName) {
  return (
    dispatch => {
      dispatch({
        type: GET_RUBYGEM_REQUEST,
        gemName
      });

      apiEndpoints.find(gemName)
        .then(response => {
          console.log(response);
          dispatch({
            type: GET_RUBYGEM_SUCCESS,

          })
        })
        .catch(
          dispatch
          ({
            type: GET_RUBYGEM_FAILURE,

          })
        );
    }
  )
}