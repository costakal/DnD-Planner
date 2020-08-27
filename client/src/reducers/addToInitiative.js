const initialState = {
  status: "idle",
  monster: null,
};

export default function addToInitiative(state = initialState, action) {
  switch (action.type) {
    case "LOAD_ADD_TO_INITIATIVE":
      return {
        status: "loading",
      };
    case "ADD_TO_INITIATIVE":
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
