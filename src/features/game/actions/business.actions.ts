// Modules
import { createAction } from '@reduxjs/toolkit';

// Constants
import {
  UPDATE_BUSINESS,
  GET_BUSINESS_LIST
} from '../constants/business.constants';

// Typings
import {
  UpdateBusinessPayloadType,
  GetBusinessListPayloadType
} from '../typings/business.typings';


export const getBusinessInfo = createAction<UpdateBusinessPayloadType>(UPDATE_BUSINESS);

export const getBusinessList = createAction<GetBusinessListPayloadType>(GET_BUSINESS_LIST);
