// Login and user Actions

export const checkingForUser = () => ({
  type: "LOADING_USER",
});

export const signIn = (user) => ({
  type: "SET_CURRENT_USER",
  user,
});

export const refreshPage = (user) => ({
  type: "PAGE_REFRESH",
  user,
});

//other actions...
