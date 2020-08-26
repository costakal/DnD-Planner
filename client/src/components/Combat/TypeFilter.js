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
      <h2>Filter by monsters</h2>
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
  display: flex;
  flex-wrap: wrap;
`;
