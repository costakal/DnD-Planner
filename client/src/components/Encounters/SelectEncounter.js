import React from "react";
import styled from "styled-components";
import bg from "../../assets/battle-bg2.jpg";

import SavedEncounter from "./SavedEncounter";

const SelectEncounters = () => {
  return (
    <Wrapper>
      <SavedEncounter />
      <SavedEncounter />
      <SavedEncounter />
      <SavedEncounter />
    </Wrapper>
  );
};

export default SelectEncounters;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 50px;
`;
