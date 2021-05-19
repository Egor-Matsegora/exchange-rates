import { ofType } from "redux-observable";
import { types } from "../types";
import { catchError, map, mergeMap, switchMap, tap } from "rxjs/operators";
import { concat, EMPTY, iif, of } from "rxjs";
import { ajax } from 'rxjs/ajax';
import { fillCurrencyError, fillCurrencySuccess, setActiveCurrencyList } from "../actions";
import { currentDateHelper } from "helpers/currentDateHelper";

export const getCurrencyEpic = ($action) => {
  const currentDate = currentDateHelper();
  return $action.pipe(
    ofType(types.GET_CURRENCY),
    mergeMap(() => iif(
          () => !!localStorage.getItem(currentDate),
          of(fillCurrencySuccess(JSON.parse(localStorage.getItem(currentDate)))),
          ajax.getJSON('https://www.cbr-xml-daily.ru/daily_json.js').pipe(
            map(res => {
              const currency = [];

              for (const key in res.Valute) {
                if (res.Valute[key]) {
                  const valute = res.Valute[key];
                  currency.push(valute);
                }
              }
              return fillCurrencySuccess(currency);
            }
          ),
          tap(action => localStorage.setItem(currentDate, JSON.stringify(action.payload))),
        )
      )
    ),
    switchMap(action => {
      return concat(
        of(action),
        !!localStorage.getItem('options') ? of(setActiveCurrencyList(JSON.parse(localStorage.getItem('options')))) : EMPTY
      )
    }),
    catchError((err) => {
      console.error(err);
      return of(fillCurrencyError());
    })
  )
}