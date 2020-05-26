// Modules
import { combineReducers } from 'redux';

// Reducers
import { gameReducers } from '../game';


export default combineReducers({
  game: gameReducers
});
