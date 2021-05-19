import { types } from '../types';


export const getCurrencyAsync = () => ({
  type: types.GET_CURRENCY
});

export const fillCurrencySuccess = (currency) => ({
  type: types.GET_CURRENCY_SUCCESS,
  payload: currency
});

export const fillCurrencyError = () => ({
  type: types.GET_CURRENCY_ERROR
});

export const filterCurrency = (queryString) => {
  return {
    type: types.FILTER_CURRENCY,
    payload: queryString
  }
};

export const abortFiltration = () => ({
  type: types.ABORT_FILTER_CURRENCY,
});

export const setBaseCurrency = (baseCurrency = 'USD') => ({
  type: types.SET_BASE_CURRENCY,
  payload: baseCurrency
});

export const calculateCurrency = (currencyValue = 1 ) => ({
  type: types.CALCULATE_CURRENCY,
  payload: currencyValue
});

export const calculateCurrencyReverse = (currencyValue = 1 ) => ({
  type: types.CALCULATE_CURRENCY_REVERSE,
  payload: currencyValue
});

export const setActiveCurrencyList = (activeCurrencyList = ['USD']) => ({
  type: types.SET_ACTIVE_CURRENCY_LIST,
  payload: activeCurrencyList,
});
