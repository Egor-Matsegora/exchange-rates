import { combineEpics } from "redux-observable";
import { currencyListToStorageEpic } from "./currency-list-to-storage.epic";
import { getCurrencyEpic } from "./get-currency.epic";

export const homeEpic = combineEpics(
  getCurrencyEpic,
  currencyListToStorageEpic
);