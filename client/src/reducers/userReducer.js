const initialState = {
  status: "idle",
  currentUser: null,
};

export default function userReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "RECEIVE_CURRENT_USER":
      return {
        ...state,
        currentUser: action.user,
      };
    default: {
      return state;
    }
  }
}
