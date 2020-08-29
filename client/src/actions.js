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

//Get Monster Details

export const loadMonsterDetails = () => ({
  type: "LOAD_MONSTERS_DETAILS",
});

export const getMonsterDetails = (monsters) => ({
  type: "GET_MONSTER_DETAILS",
  monsters,
});

// add to initiative
export const loadAddMonster = () => ({
  type: "LOAD_ADD_TO_INITIATIVE",
});

export const addMonster = (monster) => ({
  type: "ADD_TO_INITIATIVE",
  monster,
});

export const removeMonster = (monster) => ({
  type: "DELETE_FROM_INITIATIVE",
  monster,
});

export const updateHealth = (health, monsterKey) => ({
  type: "CHANGE_HIT_POINTS",
  health,
  monsterKey,
});

export const addSavedEncounter = (data) => ({
  type: "ADD_FROM_SAVED_ENCOUNTERS",
  data,
});

// Create new encounter
export const createNewEncounter = (name, description, monsterObj) => ({
  type: "CREATE_NEW_ENCOUNTER",
  name,
  description,
  monsterObj,
});

export const getAllEncounters = (data) => ({
  type: "GET_ALL_ENCOUNTERS",
  data,
});
