const initialState = {
  status: "idle",
  monsterList: null,
};

export default function monstersReducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_ALL_MONSTERS":
      return {
        ...state,
        status: "loading",
      };
    case "GET_ALL_MONSTERS":
      return {
        ...state,
        status: "ready",
        monsterList: action.monsters,
      };
    default: {
      return state;
    }
  }
}
