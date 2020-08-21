const initialState = {
  status: "idle",
  currentUser: null,
};

export default function currentUserReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING_USER":
      return {
        ...state,
        status: "loading",
      };
    case "SET_CURRENT_USER":
      return {
        ...state,
        status: "idle",
        currentUser: action.user,
      };
    case "PAGE_REFRESH":
      if (action.user) {
        return { ...state, status: "idle", currentUser: action.user };
      } else {
        return { status: "idle", currentUser: null };
      }

    default: {
      return state;
    }
  }
}
