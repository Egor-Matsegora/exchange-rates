import { combineReducers } from 'redux';

import { currencyReducer as currency } from 'pages/HomePage/store/reducers';
import { currencyRangeReducer as currencyRange } from 'pages/CurrencyPage/store/reducers';

import { combineEpics } from 'redux-observable';

import { homeEpic } from 'pages/HomePage/store/middleware';

export const rootReducer = combineReducers({ currency, currencyRange });

export const rootEpic = combineEpics(homeEpic);
