// Modules
import { createReducer, PayloadAction } from '@reduxjs/toolkit';

// Constants
import {
  UPDATE_BUSINESS,
  GET_BUSINESS_LIST
} from '../constants/business.constants';

// Typings
import {
  BusinessStateType,
  UpdateBusinessPayloadType,
  GetBusinessListPayloadType,
} from '../typings/business.typings';

// Utils
import { formatBusinessListToMap } from '../utils/business-data-flow.utils';


const initialState: BusinessStateType = {
  count: 0,
  businessById: {},
  businessIds: []
};


const handleUpdateBusiness = (
  state: BusinessStateType,
  action: PayloadAction<UpdateBusinessPayloadType>
): BusinessStateType => {
  const { business } = action.payload;

  return {
    ...state,
    businessById: {
      ...state.businessById,
      [business.id]: business
    }
  };
};


const handleGetBusinessList = (
  state: BusinessStateType,
  action: PayloadAction<GetBusinessListPayloadType>
): BusinessStateType => {
  const { businessList } = action.payload;

  const { businessById, businessIds } = formatBusinessListToMap(businessList);

  return {
    ...state,
    count: businessList.length,
    businessById,
    businessIds
  };
};

const handlers = {
  [UPDATE_BUSINESS]: handleUpdateBusiness,
  [GET_BUSINESS_LIST]: handleGetBusinessList
};

export default createReducer(initialState, handlers);
