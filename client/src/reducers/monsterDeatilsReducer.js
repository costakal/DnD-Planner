const initialState = {
  status: "idle",
  monsters: null,
};

export default function monsterDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_MONSTERS_DETAILS":
      return {
        ...state,
        status: "loading",
      };
    case "GET_MONSTER_DETAILS":
      return {
        ...state,
        status: "ready",
        monsters: action.monsters,
      };
    default: {
      return state;
    }
  }
}
