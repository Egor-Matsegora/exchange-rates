import { types } from '../types';

const initialState = {
  currencyRange: null,
  currencRangeyLoading: false
}

export const currencyRangeReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.GET_CURRENCY_RANGE:
      return {
        ...state,
        currencyLoading: true
      };

    case types.GET_CURRENCY_RANGE_SUCCESS:
      return {
        ...state,
        currencyRange: action.payload,
        currencyRangeLoading: false
      };

      default:
        return state;
  }
}