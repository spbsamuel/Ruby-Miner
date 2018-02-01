import {combineReducers} from 'redux';
import rubygems from './rubygems/reducers'
import dashboard from './dashboard/reducers'
import {routerReducer as router} from 'react-router-redux';

const rootReducer = combineReducers({
  router,
  rubygems,
  dashboard
});

export default rootReducer;
