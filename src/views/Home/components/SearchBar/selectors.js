import queryString from 'query-string'
import {createSelector} from 'reselect'
import _get from 'lodash/get'

export const getQueryObj = createSelector(
  state => _get(state, 'router.location.search', ''),
  search => queryString.parse(search) || {}
);

export const getUrlQueryByKey = key => createSelector(
  getQueryObj,
  queryObj => queryObj && queryObj[key]
);