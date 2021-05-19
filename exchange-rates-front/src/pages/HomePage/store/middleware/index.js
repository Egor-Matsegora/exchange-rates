import { combineEpics } from "redux-observable";
import { getCurrencyEpic } from "./get-currency.epic";

export const homeEpic = combineEpics(getCurrencyEpic);