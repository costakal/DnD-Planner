import { combineReducers } from "redux";

import currentUserReducer from "./currentUserReducer";
import monstersReducer from "./monstersReducer";
import singleMonsterReducer from "./singleMonsterReducer";
import monsterDetailsReducer from "./monsterDeatilsReducer";
import addToInitiative from "./addToInitiative";
import addEncounter from "./addEncounter";

export default combineReducers({
  currentUserReducer,
  monstersReducer,
  singleMonsterReducer,
  monsterDetailsReducer,
  addToInitiative,
  addEncounter,
});
