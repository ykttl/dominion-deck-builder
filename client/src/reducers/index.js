import { combineReducers } from "redux";
import deck from "./deck";
import deckList from "./deckList";
import auth from "./auth";

const reducers = combineReducers({
  deck,
  deckList,
  auth
});

export default reducers;
