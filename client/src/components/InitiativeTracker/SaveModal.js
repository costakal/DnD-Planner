import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { createNewEncounter } from "../../actions";

const SaveModal = ({ handleClose }) => {
  const dispatch = useDispatch();
  const monsters = useSelector((state) => state.addToInitiative.monsterInit);

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
        {Object.values(monsters).map((monster) => (
          <p>
            {monster.name}
            <span>: CR {monster.challenge_rating}</span>
          </p>
        ))}

        <button
          onClick={() => {
            dispatch(createNewEncounter(nameValue, descValue, monsters));
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
