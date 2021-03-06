const initialState = {
  status: "idle",
  data: {},
};

export default function addNewEvent(state = initialState, action) {
  switch (action.type) {
    case "LOAD_EVENT":
      return {
        ...state,
        status: action.status,
      };
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
