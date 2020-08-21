import { combineReducers } from "redux";

import currentUserReducer from "./currentUserReducer";
import monstersReducer from "./monstersReducer";

export default combineReducers({ currentUserReducer, monstersReducer });
