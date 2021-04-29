import { types } from '../types';
import { api } from 'api';

export const getCurrencyRangeAsync = (currency) => (dispatch, getState) => {
  dispatch({
    type: types.GET_CURRENCY_RANGE
  });
  api.fetchCurrencyRange(currency)
    .then(res => {
      const currentCurrency = Object.values(res.data)[0];
      dispatch(getRangeCurrencySuccess(currentCurrency));
    })
    .catch(err => getRangeCurrencyError());
};

export const getRangeCurrencySuccess = (currentCurrency) => ({
  type: types.GET_CURRENCY_RANGE_SUCCESS,
  payload: currentCurrency
})

export const getRangeCurrencyError = () => ({
  type: types.GET_CURRENCY_RANGE_ERROR
})