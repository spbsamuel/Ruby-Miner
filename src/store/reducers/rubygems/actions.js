import apiEndpoints from './apiEndpoints'
import _keyBy from 'lodash/keyBy'

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

      if (searchQuery.length > 0){
        apiEndpoints.search(searchQuery)
          .then(response => {
            const results = response.map(({name}) => name);
            const gems = _keyBy(response, 'name');
            dispatch({
              type: SEARCH_QUERY_SUCCESS,
              searchQuery,
              results,
              gems
            })
          });
      }
      else{
        dispatch({
          type: SEARCH_QUERY_SUCCESS,
          searchQuery,
          results: [],
          gems: {}
        })
      }
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
          dispatch({
            type: GET_RUBYGEM_SUCCESS,

          })
        });
    }
  )
}

export const SET_GEM_FAVOURITES = 'SET_GEM_FAVOURITES';

export function setGemFavourites(gemName, setAsFavourite=true) {
  return ({
    type: SET_GEM_FAVOURITES,
    gemName,
    setAsFavourite
  })
}

export const SAVE_UNSAVE_SEARCHQUERY = 'SAVE_UNSAVE_SEARCHQUERY';

export function saveOrUnsaveSearchQuery(searchQuery, save=true) {
  return ({
    type: SAVE_UNSAVE_SEARCHQUERY,
    searchQuery,
    save
  })
}