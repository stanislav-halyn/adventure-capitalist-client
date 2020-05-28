// Typings
import { RootReducerStateType } from 'typings/store';


export const selectBusinessIds = (state: RootReducerStateType) => (
  state.game.business.businessIds
);

export const selectBusinessById = (state: RootReducerStateType) => (
  state.game.business.businessById
);
