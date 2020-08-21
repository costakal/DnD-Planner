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

//All monsters actions

export const loadMonsters = () => ({
  type: "LOAD_ALL_MONSTERS",
});

export const gettingMonsterList = (monsters) => ({
  type: "GET_ALL_MONSTERS",
  monsters,
});
