import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { createNewEncounter } from "../../actions";

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
        <input
          value={descValue}
          onChange={(ev) => {
            setDescValue(ev.target.value);
          }}
        />
        <p>Monsters in this encounter: </p>
        {Object.values(monsterInit).map((monster) => (
          <p>
            {monster.name}
            <span>: CR {monster.challenge_rating}</span>
          </p>
        ))}

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
  margin: 50px;
  min-height: 100%;
  border-radius: 2px;
  background: white;
  z-index: 100;
  display: flex;
  flex-direction: column;
  padding: 50px;
`;
