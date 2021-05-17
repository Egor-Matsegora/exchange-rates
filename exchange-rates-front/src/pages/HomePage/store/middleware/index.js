import { combineEpics } from "redux-observable";
import { calculateCurrencyEpic } from "./calculate-currency.epics";
import { currencyListToStorageEpic } from "./currency-list-to-storage.epic";
import { getCurrencyEpic } from "./get-currency.epic";
import { localCurrencyListEpic } from "./local-currency-list.epic";

export const homeEpic = combineEpics(
  getCurrencyEpic,
  calculateCurrencyEpic,
  localCurrencyListEpic,
  currencyListToStorageEpic
);