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

export const addSavedEncounter = (array) => ({
  type: "ADD_FROM_SAVED_ENCOUNTERS",
  data: { array },
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

//DICE ACTIONS

export const updateModifier = (modifier) => ({
  type: "UPDATE_MODIFIER",
  modifier,
});

export const updateDiceAmount = (diceAmount) => ({
  type: "UPDATE_DICE_AMOUNT",
  diceAmount,
});

export const getDiceResults = (results, total) => ({
  type: "GET_DICE_ROLL",
  results,
  total,
});

// NEW EVENT ACTIONS
export const loadEvent = (status) => ({
  type: "LOAD_EVENT",
  status,
});

export const saveEvent = (
  eventTitle,
  eventNPC,
  eventDesc,
  eventLocation,
  user,
  imageSrc
) => ({
  type: "SAVE_EVENT",
  data: { eventTitle, eventNPC, eventDesc, eventLocation, user, imageSrc },
});

// GET ALL EVENTS

export const getAllEvents = (data) => ({
  type: "GET_ALL_EVENTS",
  data: { data },
});

export const loadAllEvents = () => ({
  type: "LOAD_ALL_EVENTS",
});
