import { types } from '../types';
import { api } from '../../api';


export const getCurrencyAsync = () => (dispatch, getState) =>  {
  dispatch({
    type: types.GET_CURRENCY
  });
  api.fetchCurrency()
    .then(res => {
      // if (`${res.status}`.startsWith('2') || `${res.status}`.startsWith('3')) {
        const currency = [];

        for (const key in res.Valute) {
          if (res.Valute[key]) {
            const valute = res.Valute[key];
            currency.push(valute);
          }
        };

        dispatch(fillCurrencySuccess(currency));
        dispatch(calculateCurrency());
      // } else {
      //   dispatch({
      //     type: types.GET_CURRENCY_ERROR,
      //     payload: 'ошибка загрузки данных'
      //   })
      // }
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

export const setActiveCurrencyList = (activeCurrencyList) => ({
  type: types.SET_ACTIVE_CURRENCY_LIST,
  payload: activeCurrencyList,
})
