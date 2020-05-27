// Typings
import { RootReducerStateType } from '../../../store';


export const selectBusinessIds = (state: RootReducerStateType) => (
  state.game.business.businessIds
);

export const selectBusinessById = (state: RootReducerStateType) => (
  state.game.business.businessById
);

