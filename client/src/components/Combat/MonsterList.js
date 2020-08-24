import React, { useState } from "react";
import { useSelector } from "react-redux";

import MonsterItem from "./MonsterItem";
import Paginate from "./Paginate";

const MonsterList = () => {
  const monsters = useSelector((state) => state.monstersReducer);
  const monsterArray = useSelector((state) => state.monsterDetailsReducer);
  const [pageNumber, setPageNumber] = useState(0);

  return (
    <>
      {monsterArray.status === "ready" ? (
        <>
          <button>Sort By Type</button>
          <button>CR Low to High</button>
          <button>CR High to Low</button>
          <ul>
            {monsterArray.monsters
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
