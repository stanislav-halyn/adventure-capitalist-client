// Reducers
import businessReducer from './business.reducer';

// Constants
import {
  UPDATE_BUSINESS,
  GET_BUSINESS_LIST
} from '../constants/business.constants';

// Typings
import { BusinessType, BusinessStateType } from '../typings/business.typings';

// Utils
import { formatBusinessListToMap } from '../utils/business-data-flow.utils';


jest.mock('../utils/business-data-flow.utils', () => ({
  formatBusinessListToMap: jest.fn()
}));


describe('#business.reducer.ts', () => {
  const initialState: BusinessStateType = {
    count: 0,
    businessById: {},
    businessIds: []
  };

  const business: BusinessType = {
    id: 0,
    title: 'Lemon',
    profit: 2,
    level: 1,
    price: 4,
    gainCapitalDurationMs: 500,
    isGainingCapital: false,
    startGainCapitalTimestamp: null,
    isBought: false
  };

  const UNKNOWN_ACTION = 'UNKNOWN_ACTION';

  test('should return the same state for an unknown action', () => {
    expect(businessReducer(initialState, { type: UNKNOWN_ACTION }))
      .toEqual(initialState);
  });


  test('should return the same state if initial state is undefined', () => {
    expect(businessReducer(undefined, { type: UNKNOWN_ACTION }))
      .toEqual(initialState);
  });


  describe(`=> action: ${GET_BUSINESS_LIST}`, () => {
    const action = {
      type: GET_BUSINESS_LIST,
      payload: { businessList: [business] }
    };

    const formattedBusinessesList = {
      businessById: { 0: business },
      businessIds: [0]
    };

    (formatBusinessListToMap as jest.Mock).mockImplementation(() => formattedBusinessesList);


    test(`should return correct state`, () => {
      const result = businessReducer(initialState, action);
  
      expect(result.count)
        .toEqual(1);
  
      expect(result.businessById)
        .toEqual(formattedBusinessesList.businessById);
  
      expect(result.businessIds)
        .toEqual(formattedBusinessesList.businessIds);
    });


    test(`should call functions with correct arguments`, () => {
      businessReducer(initialState, action);
  
      expect(formatBusinessListToMap)
        .toBeCalled();

      expect(formatBusinessListToMap)
        .toBeCalledWith([business]);
    });
  });


  test(`should return correct state for ${UPDATE_BUSINESS} action`, () => {
    const initialState = {
      count: 1,
      businessById: { 0: business },
      businessIds: [0]
    };

    const updatedProfit = 10;

    const action = {
      type: UPDATE_BUSINESS,
      payload: {
        business: { ...business, profit: updatedProfit }
      }
    };

    const result = businessReducer(initialState, action);

    expect(result.count)
      .toEqual(1);

    expect(result.businessById)
      .toEqual({
        0: { ...business, profit: updatedProfit }
      });

    expect(result.businessIds)
      .toEqual([0]);
  });
});
