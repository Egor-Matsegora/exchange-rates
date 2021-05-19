import { ofType } from "redux-observable";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, map, mergeMap } from "rxjs/operators";
import { getRangeCurrencyError, getRangeCurrencySuccess } from "../actions";
import { types } from "../types";

export const getCurrencyRangeEpic = (actions$, state$) => actions$.pipe(
  ofType(types.GET_CURRENCY_RANGE),
  mergeMap((action$) => {
    const charCode = action$.payload;
    const { startDate, endDate } = state$.value.currencyRange;
    return ajax.getJSON(
      `https://free.currconv.com/api/v7/convert?q=${charCode}_RUB&compact=ultra&date=${startDate}&endDate=${endDate}&apiKey=77b1200042287b341644`
    ).pipe(
      map(res => {
        const currentCurrency = Object.values(res)[0];
        return getRangeCurrencySuccess(currentCurrency);
      }),
      catchError(() => of(getRangeCurrencyError()))
    )
  })
)