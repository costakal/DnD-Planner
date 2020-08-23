const initialState = {
  status: "idle",
  monster: null,
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
        status: "ready",
        monster: action.monster,
      };
    default: {
      return state;
    }
  }
}
