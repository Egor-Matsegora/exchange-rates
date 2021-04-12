import { types } from '../types';
import { api } from '../../api';


export const getCurrencyAsync = () => (dispatch, getState) =>  {
  dispatch({
    type: types.GET_CURRENCY
  });
  api.fetchCurrency()
    .then(res => {
      const currency = [];
      for (const key in res.Valute) {
        if (res.Valute[key]) {
          const valute = res.Valute[key];
          currency.push(valute);
        }
      }
      dispatch({
        type: types.GET_CURRENCY_SUCCESS,
        payload: currency
      });
    })
    .catch(console.error)
}

export const fillCurrencySuccess = (currency) => ({
  type: types.GET_CURRENCY_SUCCESS,
  payload: currency
});

export const fillCurrencyError = () => ({
  type: types.GET_CURRENCY_ERROR,
});

export const filterCurrency = (queryString) => ({
  type: types.FILTER_CURRENCY,
  payload: queryString
});

export const abortFiltration = () => ({
  type: types.ABORT_FILTER_CURRENCY,
});
