const initialState = {
  status: "idle",
  monsters: {},
};

export default function singleMonsterReducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_ONE_MONSTER":
      return {
        ...state,
        status: "loading",
      };
    case "GET_ONE_MONSTER":
      return {
        ...state,
        monsters: {
          ...state.monsters,
          [action.monster.index]: { ...action.monster, status: "ready" },
        },
      };
    default: {
      return state;
    }
  }
}
