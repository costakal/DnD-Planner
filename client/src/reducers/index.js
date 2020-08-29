import { combineReducers } from "redux";

import currentUserReducer from "./currentUserReducer";
import monstersReducer from "./monstersReducer";
import monsterDetailsReducer from "./monsterDeatilsReducer";
import addToInitiative from "./addToInitiative";
import encountersReducer from "./encountersReducer";

export default combineReducers({
  currentUserReducer,
  monstersReducer,
  monsterDetailsReducer,
  addToInitiative,
  encountersReducer,
});
