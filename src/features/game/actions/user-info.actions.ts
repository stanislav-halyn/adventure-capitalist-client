// Modules
import { createAction } from '@reduxjs/toolkit';

// Constants
import { GET_USER_INFO } from '../constants/user-info.constants';

// Typings
import { UpdateUserInfoPayloadType } from '../typings/user-info.typings';


export const getUserInfo = createAction<UpdateUserInfoPayloadType>(GET_USER_INFO);
