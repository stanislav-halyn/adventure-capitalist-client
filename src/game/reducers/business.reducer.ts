// Modules
import { createReducer, PayloadAction } from '@reduxjs/toolkit';

// Constants
import {
  UPDATE_BUSINESS,
  GET_LIST_OF_BUSINESSES
} from '../constants/business.constants';

// Typings
import {
  BusinessStateType,
  UpdateBusinessPayloadType,
  GetListOfBusinessesActionType,
} from '../typings/business.typings';

// Utils
import { formatBusinessesListToMap } from '../utils/business-data-flow.utils';


const initialState: BusinessStateType = {
  count: 0,
  businessesById: {},
  businessesIds: []
};


const handleUpdateBusiness = (
  state: BusinessStateType,
  action: PayloadAction<UpdateBusinessPayloadType>
): BusinessStateType => {
  const { business } = action.payload;

  return {
    ...state,
    businessesById: {
      ...state.businessesById,
      [business.id]: business
    }
  };
};


const handleGetListOfBusinesses = (
  state: BusinessStateType,
  action: PayloadAction<GetListOfBusinessesActionType>
): BusinessStateType => {
  const { businessesList } = action.payload;

  const { businessesById, businessesIds } = formatBusinessesListToMap(businessesList);

  return {
    ...state,
    count: businessesList.length,
    businessesById,
    businessesIds
  };
};

const handlers = {
  [UPDATE_BUSINESS]: handleUpdateBusiness,
  [GET_LIST_OF_BUSINESSES]: handleGetListOfBusinesses
};

export default createReducer(initialState, handlers);
