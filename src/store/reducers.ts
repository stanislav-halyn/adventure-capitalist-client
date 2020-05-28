// Modules
import { combineReducers } from 'redux';

// Reducers
import { gameReducers } from 'features/game';


const rootReducer = combineReducers({
  game: gameReducers
});

export default rootReducer;
