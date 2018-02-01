import apiEndpoints from './apiEndpoints'
import _keyBy from 'lodash/keyBy'
import _pick from 'lodash/pick'
import {replace} from 'react-router-redux'

export const SEARCH_QUERY_REQUEST = 'SEARCH_QUERY_REQUEST';
export const SEARCH_QUERY_SUCCESS = 'SEARCH_QUERY_SUCCESS';
export const SEARCH_QUERY_FAILURE = 'SEARCH_QUERY_FAILURE';

function createQueryStr(searchQuery='', page=0) {
  if (searchQuery === '' || typeof searchQuery !== 'string') return '';

  const queryStr = `?query=${searchQuery}`;
  if (page > 1 && !isNaN(page)) return queryStr + `&page=${parseInt(page)}`;
  return queryStr
}

export function searchRubyGems(searchQuery, page=0) {
  return (
    dispatch => {
      dispatch({
        type: SEARCH_QUERY_REQUEST,
        searchQuery,
        page
      });

      const queryStr = createQueryStr(searchQuery, page);

      dispatch(replace(queryStr));

      if (searchQuery.length > 0) {
        apiEndpoints.search(queryStr)
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
      else {
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
            gemName,
            response
          })
        });
    }
  )
}

export const SAVE_UNSAVE_SEARCHQUERY = 'SAVE_UNSAVE_SEARCHQUERY';
export const SET_GEM_FAVOURITES = 'SET_GEM_FAVOURITES';

export const LOCAL_STORAGE_SYNCED = 'LOCAL_STORAGE_SYNCED';
export const LOCAL_STORAGE_SYNCED_FAILURE = 'LOCAL_STORAGE_SYNCED_FAILURE';

export function setGemFavourites(gemName, setAsFavourite = true, time) {
  return (
    (dispatch, getState) => {
      dispatch({
        type: SET_GEM_FAVOURITES,
        gemName,
        setAsFavourite,
        time
      });
      setTimeout(() => {
        try {
          const {rubygems: {favourites, gems}} = getState();
          const favouritesList = Object.keys(favourites);
          const favouriteGems = _pick(gems, favouritesList);
          localStorage.setItem('favourites', JSON.stringify(favourites));
          localStorage.setItem('gems', JSON.stringify(favouriteGems));
          dispatch({
            type: LOCAL_STORAGE_SYNCED
          })
        }
        catch (error) {
          dispatch
          ({
            type: LOCAL_STORAGE_SYNCED_FAILURE,
          })
        }
      }, 0)
    }
  )
}

export function saveOrUnsaveSearchQuery(searchQuery, save = true, time) {
  return (
    (dispatch, getState) => {
      dispatch({
        type: SAVE_UNSAVE_SEARCHQUERY,
        searchQuery,
        save,
        time
      });
      setTimeout(() => {
        try {
          const {rubygems: {savedQueries}} = getState();
          localStorage.setItem('savedQueries', JSON.stringify(savedQueries));
          dispatch({
            type: LOCAL_STORAGE_SYNCED
          })
        }
        catch (error) {
          dispatch
          ({
            type: LOCAL_STORAGE_SYNCED_FAILURE,
          })
        }
      }, 0)
    }
  )
}