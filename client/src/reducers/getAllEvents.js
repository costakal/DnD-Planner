const initialState = {
  status: "idle",
  data: null,
};

export default function getEvents(state = initialState, action) {
  switch (action.type) {
    case "LOAD_ALL_EVENTS":
      return {
        ...state,
        status: "loading",
      };
    case "GET_ALL_EVENTS":
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
