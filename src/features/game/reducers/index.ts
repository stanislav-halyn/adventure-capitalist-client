// Modules
import { combineReducers } from 'redux';

// Reducers
import businessReducer from './business.reducer';
import userInfoReducer from './user-info.reducer';


export default combineReducers({
  business: businessReducer,
  userInfo: userInfoReducer
});
