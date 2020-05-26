// Modules
import { createAction } from '@reduxjs/toolkit';

// Constants
import {
  UPDATE_BUSINESS,
  GET_LIST_OF_BUSINESSES
} from '../constants/business.constants';

// Typings
import {
  UpdateBusinessPayloadType,
  GetListOfBusinessesActionType,
} from '../typings/business.typings';


export const updateBusiness = createAction<UpdateBusinessPayloadType>(UPDATE_BUSINESS);

export const getListOfBusinesses = createAction<GetListOfBusinessesActionType>(GET_LIST_OF_BUSINESSES);
