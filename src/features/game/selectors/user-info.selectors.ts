// Typings
import { RootReducerStateType } from 'typings/store';


export const selectUserInfoCapital = (state: RootReducerStateType) => (
  state.game.userInfo.capital
);
