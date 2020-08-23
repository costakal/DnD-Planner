import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { loadMonsters, gettingMonsterList } from "../../actions";

import MonsterItem from "./MonsterItem";
import Paginate from "./Paginate";

const MonsterList = () => {
  const monsters = useSelector((state) => state.monstersReducer);
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(0);

  console.log(pageNumber);

  useEffect(() => {
    fetch("http://localhost:3000/monsters")
      .then((res) => res.json())
      .then((data) => {
        dispatch(loadMonsters());
        dispatch(gettingMonsterList(data));
      });
  }, []);

  return (
    <>
      {monsters.status === "ready" ? (
        <>
          <ul>
            {monsters.monsterList.results
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
