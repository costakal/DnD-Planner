import React from "react";
import styled from "styled-components";

const TypeFilter = ({ setFilteredType, setPageNumber }) => {
  const monsterTypeButton = (buttonName, monsterType) => {
    return (
      <button
        onClick={() => {
          setFilteredType(monsterType);
          setPageNumber(0);
        }}
      >
        {buttonName}
      </button>
    );
  };

  return (
    <Wrapper>
      <div>{monsterTypeButton("All", "")}</div>
      <div>{monsterTypeButton("Aberration", "aberration")}</div>
      <div>{monsterTypeButton("Beast", "beast")}</div>
      <div>{monsterTypeButton("Celestial", "celestial")}</div>
      <div>{monsterTypeButton("Construct", "construct")}</div>
      <div>{monsterTypeButton("Dragon", "dragon")}</div>
      <div>{monsterTypeButton("Elemental", "elemental")}</div>
      <div>{monsterTypeButton("Fey", "fey")}</div>
      <div>{monsterTypeButton("Fiend", "fiend")}</div>
      <div>{monsterTypeButton("Giant", "giant")}</div>
      <div>{monsterTypeButton("Humanoid", "humanoid")}</div>
      <div>{monsterTypeButton("Monstrosity", "monstrosity")}</div>
      <div>{monsterTypeButton("Ooze", "ooze")}</div>
      <div>{monsterTypeButton("Plant", "plant")}</div>
      <div>{monsterTypeButton("Undead", "undead")}</div>
    </Wrapper>
  );
};

export default TypeFilter;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  max-width: 200px;
  background-color: white;
  margin-top: 10px;
  box-shadow: 0px 18px 40px -17px rgba(0, 0, 0, 0.75);
  div {
    display: flex;
    justify-content: center;
    &:hover {
      background: darkred;
    }
    button {
      padding: 5px 0px;
      min-width: 150px;
      background: none;
      border: none;
      &:hover {
        color: white;
      }
    }
  }
`;
