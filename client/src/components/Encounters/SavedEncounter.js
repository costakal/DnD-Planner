import React from "react";
import styled from "styled-components";

const SavedEncounter = () => {
  return (
    <Wrapper>
      <h2>Encounter Name X</h2>
      <p>
        This is where the encounter details will go. All information can be
        typed in here.
      </p>
      <p>Monsters: Monster 1, Monster 2, Monster 3</p>
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
