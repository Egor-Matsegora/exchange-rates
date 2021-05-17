import { ofType } from "redux-observable";
import { types } from "../types";
import { catchError, finalize, map, mapTo, mergeMap, switchMap, tap } from "rxjs/operators";
import { iif, of } from "rxjs";
import { ajax } from 'rxjs/ajax';
import { calculateCurrency, fillCurrencyError, fillCurrencySuccess, setActiveCurrencyList } from "../actions";
import { currentDateHelper } from "helpers/currentDateHelper";

export const getCurrencyEpic = ($action) => {
  const currentDate = currentDateHelper();
  return $action.pipe(
    ofType(types.GET_CURRENCY),
    mergeMap(() => iif(
          () => !!localStorage.getItem(currentDate),
          of(fillCurrencySuccess(JSON.parse(localStorage.getItem(currentDate)))),
          ajax.getJSON('https://www.cbr-xml-daily.ru/daily_json.js').pipe(
            tap(console.log),
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
    finalize(() => calculateCurrency()),
    catchError((err) => {
      console.error(err);
      return of(fillCurrencyError());
    })
  )
}