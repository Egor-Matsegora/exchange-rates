import { types } from '../types';

const initialState = {
  currency: [],
  currencyLoading: false,
  filteredCurency: [],
  isFiltering: false,
  calculatedCurrency: null,
  baseCurrency: 'USD',
  calculatedCurrencyValue: null,
  activeCurrencyList: ['USD'],
  currentCurrency: null,
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

    case types.GET_CURRENCY_RANGE:
      return {
        ...state,
        currencyLoading: true
      }

    case types.GET_CURRENCY_RANGE_SUCCESS:
      return {
        ...state,
        currentCurrency: action.payload,
        currencyLoading: false
      }

    case types.FILTER_CURRENCY:
      const filterResult = state.currency.filter(cur =>
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
      };

    case types.SET_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: action.payload
      };

    case types.CALCULATE_CURRENCY:
      const {Nominal, Value} = state.currency.find(cur => cur.CharCode === state.baseCurrency);

      return {
        ...state,
        calculatedCurrencyValue: Value / Nominal * action.payload
      };

    case types.SET_ACTIVE_CURRENCY_LIST:
      return {
        ...state,
        activeCurrencyList: action.payload.length ? [...action.payload] : ['USD']
      }

    default:
      return state;
  }
}