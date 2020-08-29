import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { addSavedEncounter } from "../../actions";

const SavedEncounter = ({ encounter }) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const getEncounterData = useSelector((state) => state.encountersReducer);
  const { encounters } = getEncounterData;

  function handleClick() {
    history.push("/combat");
  }

  return (
    <Wrapper
      onClick={() => {
        const selectedEncounter = encounters.find(
          (enc) => enc._id === encounter._id
        );
        console.log(selectedEncounter);
        dispatch(addSavedEncounter(selectedEncounter));
        handleClick();
      }}
    >
      <h2>{encounter.nameValue}</h2>
      <p>Description: {encounter.descValue}</p>
      <p>
        Monsters:
        {Object.values(encounter.monsterInit).map((monster, index) => (
          <span key={`${monster.name}-${index}`}>
            {" "}
            {monster.name} : cr{monster.challenge_rating}
          </span>
        ))}
      </p>
    </Wrapper>
  );
};

export default SavedEncounter;

const Wrapper = styled.div`
  margin: 15px;
  padding: 15px;
  border: 2px solid black;
  line-height: 1em;
  width: 350px;
  height: 200px;
  background-color: rgb(255, 255, 255, 0.8);
`;
