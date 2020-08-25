import React, { useState } from "react";
import { useSelector } from "react-redux";

import MonsterItem from "./MonsterItem";
import Paginate from "./Paginate";
import TypeFilter from "./TypeFilter";

const MonsterList = () => {
  const monsters = useSelector((state) => state.monstersReducer);
  const monsterArray = useSelector((state) => state.monsterDetailsReducer);
  const [pageNumber, setPageNumber] = useState(0);
  const [filteredType, setFilteredType] = useState("");
  const [monsterName, setmonsterName] = useState("");

  return (
    <>
      <TypeFilter
        setFilteredType={setFilteredType}
        setPageNumber={setPageNumber}
      />
      <input
        value={monsterName}
        onChange={(ev) => {
          setmonsterName(ev.target.value);
        }}
      />

      {monsterArray.status === "ready" ? (
        <>
          <ul>
            {filteredType === ""
              ? monsterArray.monsters
                  .filter((mon) =>
                    mon.name.toLowerCase().includes(monsterName.toLowerCase())
                  )
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
                  .map((monster) => (
                    <MonsterItem key={monster.index} monster={monster} />
                  ))
                  .splice(pageNumber, 10)}
          </ul>
          <Paginate monsters={monsters} setPageNumber={setPageNumber} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default MonsterList;
