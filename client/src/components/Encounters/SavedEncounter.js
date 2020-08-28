import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const SavedEncounter = () => {
  const encounter = useSelector((state) => state.addEncounter);
  return (
    <Wrapper>
      <h2>{encounter.encounterName}</h2>
      <p>Description: {encounter.encounterDesc}</p>
      <p>
        Monsters:{" "}
        {Object.values(encounter.encounterMonsters).map((monster) => (
          <span>{monster.name}, </span>
        ))}
      </p>
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
