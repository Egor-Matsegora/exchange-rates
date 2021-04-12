import { types } from '../types';

const initialState = {
  currency: [],
  currencyLoading: false,
  filteredCurency: [],
  isFiltering: false
}

export const currencyReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.GET_CURRENCY:
      return {
        ...state,
        currencyLoading: true
      };

    case types.GET_CURRENCY_SUCCESS:
      return {
        ...state,
        currency: [...action.payload],
        currencyLoading: false,
      };

    case types.GET_CURRENCY_ERROR:
      return {
        ...state,
        currencyLoading: false
      };

    case types.FILTER_CURRENCY:
      let filterResult = state.currency.filter(cur =>
        cur.CharCode.toLowerCase().includes(action.payload.toLowerCase())
          || cur.Name.toLowerCase().includes(action.payload.toLowerCase())
      );

      return {
        ...state,
        isFiltering: true,
        filteredCurency: [...filterResult],
      };

    case types.ABORT_FILTER_CURRENCY:
      return {
        ...state,
        isFiltering: false,
        filteredCurency: []
      }

    default:
      return state;
  }
}