import { types } from '../types';
import { api } from 'api';
import { rangeDateHelper } from 'helpers/currentDateHelper';

const [dafaultStartDate, defaultEndDate] = rangeDateHelper();

export const getCurrencyRangeAsync = (currency, startDate, endDate) => (dispatch, getState) => {
  dispatch({
    type: types.GET_CURRENCY_RANGE
  });

  api.fetchCurrencyRange(currency, startDate = getState().currencyRange.startDate, endDate = getState().currencyRange.endDate)
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

export const setDateRange = (dateRange = {startDate: dafaultStartDate, endDate: defaultEndDate}) => ({
  type: types.SET_DATE_RANGE,
  payload: dateRange
})