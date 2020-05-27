// Modules
import { createAction } from '@reduxjs/toolkit';

// Constants
import { UPDATE_USER_INFO } from '../constants/user-info.constants';

// Typings
import { UpdateUserInfoPayloadType } from '../typings/user-info.typings';


export const updateUserInfo = createAction<UpdateUserInfoPayloadType>(UPDATE_USER_INFO);
