import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Icon from "react-icons-kit";
import { search } from "react-icons-kit/feather/search";

import Loading from "../../Loading";
import MonsterItem from "./MonsterItem";
import Paginate from "./Paginate";
import TypeFilter from "./TypeFilter";

const MonsterList = () => {
  const monsters = useSelector((state) => state.monstersReducer);
  const monsterArray = useSelector((state) => state.monsterDetailsReducer);
  const [pageNumber, setPageNumber] = useState(0);
  const [filteredType, setFilteredType] = useState("");
  const [monsterName, setmonsterName] = useState("");
  const [viewDropdown, setViewDropdown] = useState(false);

  return (
    <Wrapper>
      <Header>
        <div>
          <Icon icon={search} />
          <input
            placeholder="Ex. Dragon, Direwolf, etc."
            value={monsterName}
            onChange={(ev) => {
              setmonsterName(ev.target.value);
            }}
          />
        </div>
        <button
          onClick={() => {
            setViewDropdown(!viewDropdown);
          }}
        >
          Filter By Type
          <div
            style={viewDropdown ? { display: "block" } : { display: "none" }}
          >
            <TypeFilter
              setFilteredType={setFilteredType}
              setPageNumber={setPageNumber}
            />
          </div>
        </button>
      </Header>
      {monsterArray.status === "ready" ? (
        <>
          <ul>
            {filteredType === ""
              ? monsterArray.monsters
                  .filter((mon) =>
                    mon.name.toLowerCase().includes(monsterName.toLowerCase())
                  )
                  .sort(function (a, b) {
                    if (a.name < b.name) {
                      return -1;
                    }
                    if (a.name > b.name) {
                      return 1;
                    }
                    return 0;
                  })
                  .map((monster) => (
                    <MonsterItem key={monster.index} monster={monster} />
                  ))
                  .splice(pageNumber, 10)
              : monsterArray.monsters
                  .filter((mon) => {
                    let correctType = false;
                    let correctName = false;
                    let hasSearched = false;
                    if (monsterName.length > 0) {
                      hasSearched = true;
                    }
                    if (filteredType === mon.type) {
                      correctType = true;
                    }
                    if (
                      mon.name
                        .toLowerCase()
                        .includes(monsterName.toLowerCase()) &&
                      monsterName.length >= 2
                    ) {
                      correctName = true;
                    }
                    if (!hasSearched) {
                      return correctType;
                    } else {
                      return correctType && correctName;
                    }
                  })
                  .sort(function (a, b) {
                    if (a.name < b.name) {
                      return -1;
                    }
                    if (a.name > b.name) {
                      return 1;
                    }
                    return 0;
                  })
                  .map((monster) => (
                    <MonsterItem key={monster.index} monster={monster} />
                  ))
                  .splice(pageNumber, 10)}
          </ul>
          <Paginate monsters={monsters} setPageNumber={setPageNumber} />
        </>
      ) : (
        <>
          <Loading />
          <h4>this may take up to 30 seconds</h4>
          <p>loading monsters...</p>
        </>
      )}
    </Wrapper>
  );
};

export default MonsterList;

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

const Header = styled.div`
  padding: 10px 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 16px;
  button {
    cursor: pointer;
    background: none;
    border: none;
    font-size: 16px;
    &:hover {
      background: darkred;
      color: white;
    }
  }
  input {
    border: none;
    margin: 0px 8px;
    border-radius: 15px;
    padding: 2px 5px;
    width: 200px;
  }
`;
