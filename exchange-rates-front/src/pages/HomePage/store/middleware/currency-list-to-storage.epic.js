import { ofType } from "redux-observable";
import { of } from "rxjs";
import { switchMap, tap } from "rxjs/operators";
import { setActiveCurrencyList } from "../actions";
import { types } from "../types";

export const currencyListToStorageEpic = $actions => $actions.pipe(
  ofType(types.SET_ACTIVE_CURRENCY_LIST_WITH_STORAGE),
  tap((action) => localStorage.setItem('options', JSON.stringify(action.payload))),
  switchMap(action => of(setActiveCurrencyList(action.payload)))
);