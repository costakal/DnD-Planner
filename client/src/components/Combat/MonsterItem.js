import React from "react";

const MonsterItem = ({ monster }) => {
  return (
    <div key={monster.index}>
      <li>{monster.name}</li>
    </div>
  );
};

export default MonsterItem;
