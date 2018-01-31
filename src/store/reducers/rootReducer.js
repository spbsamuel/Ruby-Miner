import {combineReducers} from 'redux';
import rubygems from './rubygems/reducers'
import dashboard from './dashboard/reducers'

const rootReducer = combineReducers({
  rubygems,
  dashboard
});

export default rootReducer;
