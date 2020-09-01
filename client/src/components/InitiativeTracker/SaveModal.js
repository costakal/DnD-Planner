import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { COLORS } from "../../constants";

const SaveModal = ({ handleClose }) => {
  const dispatch = useDispatch();
  // const monsters = useSelector((state) => state.addToInitiative.monsterInit);
  const monsterDetails = useSelector((state) => state.addToInitiative);
  const { monsterInit, numOfMonsters, combatParticipants } = monsterDetails;
  const userEmail = useSelector((state) => state.currentUserReducer);

  const [nameValue, setNameValue] = useState(null);
  const [descValue, setDescValue] = useState(null);

  return (
    <Wrapper>
      <Mask onClick={handleClose}></Mask>
      <ModalContent>
        <label>Encounter Name:</label>
        <input
          value={nameValue}
          onChange={(ev) => {
            setNameValue(ev.target.value);
          }}
        />
        <label>Encounter Details</label>
        <textarea
          rows="8"
          value={descValue}
          onChange={(ev) => {
            setDescValue(ev.target.value);
          }}
        />
        <label>Monsters in this encounter: </label>
        <div>
          {Object.values(monsterInit).map((monster) => (
            <p>
              {monster.name}
              <span>: CR {monster.challenge_rating}</span>
            </p>
          ))}
        </div>

        <button
          onClick={() => {
            const encounterData = {
              nameValue,
              descValue,
              monsterInit,
              numOfMonsters,
              combatParticipants,
              userEmail,
            };
            fetch("/saveEncounters", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(encounterData),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              })
              .catch((err) => {
                console.error(err);
              });
            handleClose();
          }}
        >
          Save Encounter
        </button>
      </ModalContent>
    </Wrapper>
  );
};

export default SaveModal;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  z-index: 10;
  max-height: 100vh;
  overflow-y: auto;
`;
const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.8;
  z-index: 50;
`;
const ModalContent = styled.div`
  position: relative;
  margin: 50px 400px;
  min-height: 100%;
  border-radius: 2px;
  background: white;
  z-index: 100;
  display: flex;
  flex-direction: column;
  padding: 50px;
  label {
    padding: 0px 0px 5px;
    font-size: 16px;
    font-weight: 600;
  }
  textarea {
    margin: 0px 0px 5px;
    font-size: 16px;
    font-weight: 600;
  }
  input {
    font-size: 16px;
    margin: 0px 0px 15px;
  }
  div {
    padding: 10px 0px 20px;
    span {
      font-style: italic;
    }
  }
  button {
    background: ${COLORS.primary};
    border: none;
    cursor: pointer;
    color: white;
    padding: 5px 10px;
    transition: 0.2s;
    &:hover {
      background: black;
    }
  }
`;
