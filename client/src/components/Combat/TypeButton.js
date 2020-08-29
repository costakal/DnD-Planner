import React from "react";

const TypeButton = ({
  setFilteredType,
  setPageNumber,
  buttonName,
  monsterType,
}) => {
  return (
    <div
      onClick={() => {
        setFilteredType(monsterType);
        setPageNumber(0);
      }}
    >
      {buttonName}
    </div>
  );
};

export default TypeButton;
