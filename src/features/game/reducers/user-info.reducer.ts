// Modules
import { createReducer, PayloadAction } from '@reduxjs/toolkit';

// Constants
import { GET_USER_INFO } from '../constants/user-info.constants';

// Typings
import {
  UserInfoStateType,
  UpdateUserInfoPayloadType
} from '../typings/user-info.typings';


const initialState: UserInfoStateType = {
  capital: 0
};


const handleUpdateUserInfo = (
  state: UserInfoStateType,
  action: PayloadAction<UpdateUserInfoPayloadType>
): UserInfoStateType => ({
  ...state,
  ...action.payload
});


const handlers = {
  [GET_USER_INFO]: handleUpdateUserInfo
};

export default createReducer(initialState, handlers);
