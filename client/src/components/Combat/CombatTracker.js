import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { loadMonsters, gettingMonsterList } from "../../actions";

const CombatTracker = () => {
  const monsters = useSelector((state) => state.monstersReducer);
  const dispatch = useDispatch();

  console.log(monsters.monsterList);

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
          <h2>Combat Name</h2>
          <div>
            <h2>Monster List</h2>
            <ul>
              {monsters.monsterList.results.map((monster) => (
                <li key={monster.index}>{monster.name}</li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default CombatTracker;
