const initialState = {
  status: "idle",
  diceAmount: 1,
  modifier: 0,
  results: "",
  total: "",
  lastRoll: null,
  rollBeforeLast: null,
};

export default function diceReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DICE_ROLL":
      return {
        ...state,
        status: "ready",
        total: action.total,
        results: action.results,
        lastRoll: `${state.total} ${state.results}`,
        rollBeforeLast: state.lastRoll,
      };
    case "UPDATE_DICE_AMOUNT":
      return {
        ...state,
        status: "ready",
        diceAmount: action.diceAmount,
      };
    case "UPDATE_MODIFIER":
      return {
        ...state,
        status: "ready",
        modifier: action.modifier,
      };
    default: {
      return state;
    }
  }
}
