import React from "react";
import styled from "styled-components";
import TypeButton from "./TypeButton";

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
      <div>
        <TypeButton
          setFilteredType={setFilteredType}
          setPageNumber={setPageNumber}
          buttonName={"All"}
          monsterType={""}
        />
      </div>
      <div>
        <TypeButton
          setFilteredType={setFilteredType}
          setPageNumber={setPageNumber}
          buttonName={"Aberration"}
          monsterType={"aberration"}
        />
      </div>
      <div>
        <TypeButton
          setFilteredType={setFilteredType}
          setPageNumber={setPageNumber}
          buttonName={"Beast"}
          monsterType={"beast"}
        />
      </div>
      <div>
        <TypeButton
          setFilteredType={setFilteredType}
          setPageNumber={setPageNumber}
          buttonName={"Celestial"}
          monsterType={"celestial"}
        />
      </div>
      <div>
        <TypeButton
          setFilteredType={setFilteredType}
          setPageNumber={setPageNumber}
          buttonName={"Construct"}
          monsterType={"construct"}
        />
      </div>
      <div>
        <TypeButton
          setFilteredType={setFilteredType}
          setPageNumber={setPageNumber}
          buttonName={"Dragon"}
          monsterType={"dragon"}
        />
      </div>
      <div>
        <TypeButton
          setFilteredType={setFilteredType}
          setPageNumber={setPageNumber}
          buttonName={"Elemental"}
          monsterType={"elemental"}
        />
      </div>
      <div>
        <TypeButton
          setFilteredType={setFilteredType}
          setPageNumber={setPageNumber}
          buttonName={"Fey"}
          monsterType={"fey"}
        />
      </div>
      <div>
        <TypeButton
          setFilteredType={setFilteredType}
          setPageNumber={setPageNumber}
          buttonName={"Fiend"}
          monsterType={"fiend"}
        />
      </div>
      <div>
        <TypeButton
          setFilteredType={setFilteredType}
          setPageNumber={setPageNumber}
          buttonName={"Giant"}
          monsterType={"giant"}
        />
      </div>
      <div>
        <TypeButton
          setFilteredType={setFilteredType}
          setPageNumber={setPageNumber}
          buttonName={"Humanoid"}
          monsterType={"humanoid"}
        />
      </div>
      <div>
        <TypeButton
          setFilteredType={setFilteredType}
          setPageNumber={setPageNumber}
          buttonName={"Monstrosity"}
          monsterType={"monstrosity"}
        />
      </div>
      <div>
        <TypeButton
          setFilteredType={setFilteredType}
          setPageNumber={setPageNumber}
          buttonName={"Ooze"}
          monsterType={"ooze"}
        />
      </div>
      <div>
        <TypeButton
          setFilteredType={setFilteredType}
          setPageNumber={setPageNumber}
          buttonName={"Plant"}
          monsterType={"plant"}
        />
      </div>
      <div>
        <TypeButton
          setFilteredType={setFilteredType}
          setPageNumber={setPageNumber}
          buttonName={"Undead"}
          monsterType={"undead"}
        />
      </div>
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
  color: black;
  div {
    display: flex;
    justify-content: center;
    &:hover {
      color: white;
      background: darkred;
    }
    div {
      padding: 5px 0px;
      min-width: 150px;
      background: none;
      border: none;
    }
  }
`;
