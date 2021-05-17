import { ofType } from "redux-observable";
import { iif, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { setActiveCurrencyList } from "../actions";
import { types } from "../types";

export const localCurrencyListEpic = $actions => $actions.pipe(
  ofType(types.GET_CURRENCY),
  switchMap(() => iif(
    () => {
      return !!localStorage.getItem('options');
    },
    of(setActiveCurrencyList(JSON.parse(localStorage.getItem('options'))))
  )
));