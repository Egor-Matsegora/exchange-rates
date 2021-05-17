import { ofType } from "redux-observable";
import { mapTo } from "rxjs/operators";
import { calculateCurrency } from "../actions";
import { types } from "../types";

export const calculateCurrencyEpic = $action =>$action.pipe(
  ofType(types.GET_CURRENCY_SUCCESS),
  mapTo(calculateCurrency())
)