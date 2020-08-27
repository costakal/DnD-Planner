import React from "react";
import styled from "styled-components";

import InitiativeMonster from "./IntiativeMonster";

const InitiativeTracker = () => {
  return (
    <Wrapper>
      <InitiativeMonster />
      <InitiativeMonster />
      <InitiativeMonster />
    </Wrapper>
  );
};

export default InitiativeTracker;

const Wrapper = styled.div`
  border: 3px solid black;
  margin: 15px;
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
