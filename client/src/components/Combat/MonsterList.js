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
  const [filteredByCr, setFilteredByCr] = useState(null);

  console.log(filteredByCr);
  return (
    <>
      <TypeFilter
        setFilteredType={setFilteredType}
        setPageNumber={setPageNumber}
      />
      <input
        value={filteredByCr}
        onChange={(ev) => {
          setFilteredByCr(ev.target.value);
        }}
      />

      {monsterArray.status === "ready" ? (
        <>
          <ul>
            {filteredType === ""
              ? monsterArray.monsters
                  .map((monster) => (
                    <MonsterItem key={monster.index} monster={monster} />
                  ))
                  .splice(pageNumber, 10)
              : monsterArray.monsters
                  .filter((mon) => mon.type === filteredType)
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
