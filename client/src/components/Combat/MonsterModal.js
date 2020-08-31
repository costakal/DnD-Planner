import React from "react";
import styled from "styled-components";

import MonsterDetails from "./MonsterDetails";

const MonsterModal = ({ setMonsterModalVisible, monster }) => {
  //get selector for initiative monster and pass it to MonsterDetails below so it matches the same JSON.
  const handleClose = () => setMonsterModalVisible(false);

  return (
    <Wrapper>
      <Mask onClick={handleClose}></Mask>
      <ModalContent>
        <MonsterDetails monster={monster} />
      </ModalContent>
    </Wrapper>
  );
};

export default MonsterModal;

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
  margin: 50px 250px;
  min-height: 100%;
  border-radius: 2px;
  background: white;
  z-index: 100;
  display: flex;
  flex-direction: column;
  padding: 50px;
`;
