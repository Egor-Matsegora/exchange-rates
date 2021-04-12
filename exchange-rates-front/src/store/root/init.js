import { combineReducers } from 'redux';

import { currencyReducer as currency } from '../reducers';

export const rootReducer = combineReducers({ currency });
