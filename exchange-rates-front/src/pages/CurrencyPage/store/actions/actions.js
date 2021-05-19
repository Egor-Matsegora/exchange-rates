import { types } from '../types';
import { rangeDateHelper } from 'helpers/currentDateHelper';

const [dafaultStartDate, defaultEndDate] = rangeDateHelper();

export const getCurrencyRangeAsync = (charCode) => {
  return {
    type: types.GET_CURRENCY_RANGE,
    payload: charCode,
  };
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