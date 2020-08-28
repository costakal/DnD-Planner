import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import InitiativeMonster from "./IntiativeMonster";
import SaveModal from "./SaveModal";

const InitiativeTracker = () => {
  const initiative = useSelector((state) => state.addToInitiative);
  const [modalVisible, setModalVisible] = useState(false);

  const handleClose = () => setModalVisible(false);

  return (
    <>
      {modalVisible ? <SaveModal handleClose={handleClose} /> : <></>}
      <Wrapper>
        {initiative.status === "ready" ? (
          <>
            {Object.keys(initiative.monsterInit).map((key) => (
              <InitiativeMonster monsterKey={key} />
            ))}
          </>
        ) : (
          <></>
        )}
        {Object.keys(initiative.monsterInit).length > 0 ? (
          <Save
            onClick={() => {
              setModalVisible(true);
            }}
          >
            Save Encounter
          </Save>
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

const Save = styled.button``;
