import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { addSavedEncounter } from "../../actions";
import { COLORS } from "../../constants";

const SavedEncounter = ({ encounter }) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const getEncounterData = useSelector((state) => state.encountersReducer);
  const { encounters } = getEncounterData;

  function handleClick() {
    history.push("/combat");
  }

  return (
    <Wrapper>
      <div>
        <h2>{encounter.nameValue}</h2>
        <h3>{encounter.descValue}</h3>
        <ul>
          Monsters:
          {Object.values(encounter.monsterInit).map((monster, index) => (
            <li key={`${monster.name}-${index}`}>
              {" "}
              {monster.name} - CR{monster.challenge_rating}
            </li>
          ))}
        </ul>
      </div>
      <RollButton>
        <button
          onClick={() => {
            const selectedEncounter = encounters.find(
              (enc) => enc._id === encounter._id
            );
            console.log(selectedEncounter);
            dispatch(addSavedEncounter(selectedEncounter));
            handleClick();
          }}
        >
          Roll Initiative!
        </button>
      </RollButton>
    </Wrapper>
  );
};

export default SavedEncounter;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 15px 5px 15px;
  padding: 15px;
  border: 3px solid black;
  line-height: 1em;
  width: 350px;
  min-height: 200px;
  background-color: rgb(255, 255, 255, 0.8);
  div {
    h2 {
      font-size: 22px;
      font-weight: 600;
      padding-bottom: 10px;
    }
    h3 {
      font-style: italic;
      padding-bottom: 10px;
    }
    ul {
      font-weight: 600;
      padding-bottom: 10px;
      li {
        font-weight: normal;
      }
    }
  }
`;

const RollButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;

  button {
    background: ${COLORS.primary};
    color: white;
    padding: 5px 10px;
    transition: 0.2s;
    border: none;
    cursor: pointer;
    &:hover {
      background: black;
    }
  }
`;
