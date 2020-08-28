const initialState = {
  status: "idle",
  encounterName: null,
  encounterDesc: null,
  encounterMonsters: {},
};

export default function addEncounter(state = initialState, action) {
  switch (action.type) {
    case "CREATE_NEW_ENCOUNTER":
      return {
        ...state,
        encounterName: action.name,
        encounterDesc: action.description,
        encounterMonsters: action.monsterObj,
      };
    default: {
      return state;
    }
  }
}
