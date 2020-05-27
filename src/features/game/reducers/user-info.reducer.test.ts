// Reducers
import userInfoReducer from './user-info.reducer';

// Constants
import { UPDATE_USER_INFO } from '../constants/user-info.constants';

// Typings
import { UserInfoStateType } from '../typings/user-info.typings';


describe('#user-info.reducer.ts', () => {
  const initialState: UserInfoStateType = {
    capital: 0
  };


  const UNKNOWN_ACTION = 'UNKNOWN_ACTION';

  test('should return the same state for an unknown action', () => {
    expect(userInfoReducer(initialState, { type: UNKNOWN_ACTION }))
      .toEqual(initialState);
  });


  test('should return the same state if initial state is undefined', () => {
    expect(userInfoReducer(undefined, { type: UNKNOWN_ACTION }))
      .toEqual(initialState);
  });


  test(`should return correct state for ${UPDATE_USER_INFO} action`, () => {
    const capital = 100;

    const action = {
      type: UPDATE_USER_INFO,
      payload: { capital }
    };

    const result = userInfoReducer(initialState, action);

    expect(result.capital)
      .toEqual(capital);
  });
});
