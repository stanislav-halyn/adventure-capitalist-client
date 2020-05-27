// Utils
import { ServerResponseType } from '../utils/typings.utils';


// Reducer types
export type UserInfoStateType = {
  capital: number
};

// Action types
export type UpdateUserInfoPayloadType = {
  capital: number
}

// Server response types
export type UpdateUserInfoServerResponseType = ServerResponseType<UpdateUserInfoPayloadType>;
