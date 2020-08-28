const initialState = {
  status: "idle",
  monsterInit: {},
  numOfMonsters: 0,
  combatParticipants: 0,
  monsterArray: [],
};

export default function addToInitiative(state = initialState, action) {
  switch (action.type) {
    case "LOAD_ADD_TO_INITIATIVE":
      return {
        ...state,
        status: "loading",
      };
    case "ADD_TO_INITIATIVE":
      const monsterNumber = state.combatParticipants + 1;
      const monsterKey = action.monster.index + "_" + monsterNumber;

      return {
        ...state,
        status: "ready",
        numOfMonsters: state.numOfMonsters + 1,
        combatParticipants: state.combatParticipants + 1,
        monsterInit: {
          ...state.monsterInit,
          [monsterKey]: {
            ...action.monster,
            monsterKey,
            current_hit_points: action.monster.hit_points,
          },
        },
        monsterArray: Object.values(state.monsterInit),
      };
    case "DELETE_FROM_INITIATIVE": {
      const updatedInitiative = { ...state };
      delete updatedInitiative.monsterInit[action.monster];
      return { ...updatedInitiative, numOfMonsters: state.numOfMonsters - 1 };
    }
    case "CHANGE_HIT_POINTS":
      return {
        ...state,
        monsterInit: {
          ...state.monsterInit,
          [action.monsterKey]: {
            ...state.monsterInit[action.monsterKey],
            current_hit_points: action.health,
          },
        },
      };
    default: {
      return state;
    }
  }
}
