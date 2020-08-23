import { combineReducers } from "redux";

import currentUserReducer from "./currentUserReducer";
import monstersReducer from "./monstersReducer";
import singleMonsterReducer from "./singleMonsterReducer";

export default combineReducers({
  currentUserReducer,
  monstersReducer,
  singleMonsterReducer,
});
