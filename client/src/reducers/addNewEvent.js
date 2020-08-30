const initialState = {
  status: "idle",
  data: {},
};

export default function addNewEvent(state = initialState, action) {
  switch (action.type) {
    case "SAVE_EVENT":
      return {
        ...state,
        status: "ready",
        data: action.data,
      };
    default: {
      return state;
    }
  }
}
