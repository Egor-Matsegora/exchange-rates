import { types } from '../types';
import { api } from '../../api';
import { currentDateHelper } from 'helpers/currentDateHelper';


export const getCurrencyAsync = () => (dispatch, getState) =>  {
  dispatch({
    type: types.GET_CURRENCY
  });

  const dateString = currentDateHelper();

  if (localStorage.getItem(dateString)) {
    dispatch(fillCurrencySuccess(JSON.parse(localStorage.getItem(dateString))));
    dispatch(calculateCurrency());
    return;
  }

  api.fetchCurrency()
    .then(res => {
      const currency = [];

      for (const key in res.data.Valute) {
        if (res.data.Valute[key]) {
          const valute = res.data.Valute[key];
          currency.push(valute);
        }
      };

      localStorage.setItem(dateString, JSON.stringify(currency));
      dispatch(fillCurrencySuccess(currency));
      dispatch(calculateCurrency());
    })
    .catch(err => dispatch({
      type: types.GET_CURRENCY_ERROR,
      payload: 'ошибка загрузки данных'
    }))
}

export const fillCurrencySuccess = (currency) => ({
  type: types.GET_CURRENCY_SUCCESS,
  payload: currency
});

export const fillCurrencyError = () => ({
  type: types.GET_CURRENCY_ERROR,
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

export const setActiveCurrencyList = (activeCurrencyList = ['USD']) => ({
  type: types.SET_ACTIVE_CURRENCY_LIST,
  payload: activeCurrencyList,
});
