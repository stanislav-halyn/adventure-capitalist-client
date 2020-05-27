// Typings
import { RootReducerStateType } from '../../store';


export const selectUserInfoCapital = (state: RootReducerStateType) => (
  state.game.userInfo.capital
);
