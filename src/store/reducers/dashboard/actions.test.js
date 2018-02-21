import {POP_NESTED_VIEW, goBack} from './actions'

test('goBack action creator', () => {
  const action = goBack();
  expect(action).toEqual({type: POP_NESTED_VIEW});
});