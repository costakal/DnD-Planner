import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Icon from "react-icons-kit";
import { ic_add_circle } from "react-icons-kit/md/ic_add_circle";
import { ic_arrow_drop_down_circle } from "react-icons-kit/md/ic_arrow_drop_down_circle";

import InitiativeMonster from "./IntiativeMonster";
import SaveModal from "./SaveModal";
import { COLORS } from "../../constants";

const InitiativeTracker = () => {
  const initiative = useSelector((state) => state.addToInitiative);
  const [modalVisible, setModalVisible] = useState(false);

  const handleClose = () => setModalVisible(false);

  return (
    <>
      {modalVisible ? <SaveModal handleClose={handleClose} /> : <></>}
      <Wrapper>
        <Buttons>
          {initiative.status !== "ready" ||
          Object.keys(initiative.monsterInit).length < 1 ? (
            <PreText>
              <h2>Track initiative here!</h2>
              <p>
                Search for a monster on the right and use{" "}
                <Icon style={{ color: COLORS.primary }} icon={ic_add_circle} />{" "}
                to add monsters to combat or{" "}
                <Icon
                  style={{ color: COLORS.primary }}
                  icon={ic_arrow_drop_down_circle}
                />{" "}
                to take a look at their stat block.
              </p>
            </PreText>
          ) : (
            <></>
          )}
          {Object.keys(initiative.monsterInit).length > 0 ? (
            <>
              <Save
                onClick={() => {
                  setModalVisible(true);
                }}
              >
                Save Encounter
              </Save>
              <button>Sort by Initiative</button>
            </>
          ) : (
            <></>
          )}
        </Buttons>
        {initiative.status === "ready" ? (
          <>
            {Object.keys(initiative.monsterInit).map((key) => (
              <InitiativeMonster monsterKey={key} key={key} />
            ))}
          </>
        ) : (
          <></>
        )}
      </Wrapper>
    </>
  );
};

export default InitiativeTracker;

const Wrapper = styled.div`
  border: 3px solid black;
  margin: 65px 15px 15px;
  background-color: rgb(255, 255, 255, 0.8);
  width: 100%;
  max-width: 500px;
  max-height: 100vh;
  overflow-y: auto;
  border-radius: 3px;
  flex-grow: 2;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
    transition: 0.2s;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #666;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  button {
    padding: 5px 10px;
    background: ${COLORS.primary};
    color: white;
    border: none;
    transition: 0.2s;
    &:hover {
      background: black;
    }
  }
`;

const Save = styled.button``;

const PreText = styled.div`
  opacity: 0.7;
  padding: 75px 35px;
  text-align: center;
  line-height: 1.5em;
  font-style: italic;
  h2 {
    font-size: 18px;
    padding: 5px;
    font-weight: 600;
  }
`;
