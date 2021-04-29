import { combineReducers } from 'redux';

import { currencyReducer as currency } from 'pages/HomePage/store/reducers';
import { currencyRangeReducer as currencyRange } from 'pages/CurrencyPage/store/reducers';

export const rootReducer = combineReducers({ currency, currencyRange });
