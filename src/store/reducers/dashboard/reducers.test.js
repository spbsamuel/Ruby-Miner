import dashboardReducer from './reducers'
import {goBack} from './actions'

test('dashboardReducer handles goBack properly', () => {
  const action = goBack();
  const initialState = {inforPanelStack: ['rails', 'rake']};
  const nextState = dashboardReducer(initialState, action);
  expect(nextState).toEqual({inforPanelStack: ['rails']});
});