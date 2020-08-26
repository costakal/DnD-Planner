import React from "react";
import styled from "styled-components";

import bg from "../../assets/battle-bg.jpg";
import MonsterList from "./MonsterList";
import InitiativeTracker from "../InitiativeTracker";
import DiceSelector from "../Dice/DiceSelector";

const CombatTracker = () => {
  return (
    <CombatPage>
      <InitiativeTracker />
      <DiceSelector />
      <MonsterList />
    </CombatPage>
  );
};

export default CombatTracker;

const CombatPage = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
