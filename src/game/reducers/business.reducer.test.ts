// Reducers
import businessReducer from './business.reducer';

// Constants
import {
  UPDATE_BUSINESS,
  GET_LIST_OF_BUSINESSES
} from '../constants/business.constants';

// Typings
import { BusinessType, BusinessStateType } from '../typings/business.typings';

// Utils
import { formatBusinessesListToMap } from '../utils/business-data-flow.utils';


jest.mock('../utils/business-data-flow.utils', () => ({
  formatBusinessesListToMap: jest.fn()
}));


describe('#business.reducer.ts', () => {
  const initialState: BusinessStateType = {
    count: 0,
    businessesById: {},
    businessesIds: []
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


  describe(`=> action: ${GET_LIST_OF_BUSINESSES}`, () => {
    const action = {
      type: GET_LIST_OF_BUSINESSES,
      payload: { businessesList: [business] }
    };

    const formattedBusinessesList = {
      businessesById: { 0: business },
      businessesIds: [0]
    };

    (formatBusinessesListToMap as jest.Mock).mockImplementation(() => formattedBusinessesList);


    test(`should return correct state`, () => {
      const result = businessReducer(initialState, action);
  
      expect(result.count)
        .toEqual(1);
  
      expect(result.businessesById)
        .toEqual(formattedBusinessesList.businessesById);
  
      expect(result.businessesIds)
        .toEqual(formattedBusinessesList.businessesIds);
    });


    test(`should call functions with correct arguments`, () => {
      businessReducer(initialState, action);
  
      expect(formatBusinessesListToMap)
        .toBeCalled();

      expect(formatBusinessesListToMap)
        .toBeCalledWith([business]);
    });
  });


  test(`should return correct state for ${UPDATE_BUSINESS} action`, () => {
    const initialState = {
      count: 1,
      businessesById: { 0: business },
      businessesIds: [0]
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

    expect(result.businessesById)
      .toEqual({
        0: { ...business, profit: updatedProfit }
      });

    expect(result.businessesIds)
      .toEqual([0]);
  });
});
