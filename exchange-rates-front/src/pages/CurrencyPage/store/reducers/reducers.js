import { types } from '../types';
import { rangeDateHelper } from 'helpers/currentDateHelper';

const [dafaultStartDate, defaultEndDate] = rangeDateHelper();

const initialState = {
  currencyRange: null,
  currencRangeyLoading: false,
  startDate: dafaultStartDate,
  endDate: defaultEndDate,
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

    case types.SET_DATE_RANGE:
      return {
        ...state,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate
      }

    default:
      return state;
  }
}