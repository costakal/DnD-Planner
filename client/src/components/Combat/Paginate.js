import React, { useState } from "react";

const Paginate = ({ monsters, setPageNumber }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const monsterPages = Math.ceil(monsters.monsterList.count / 10);

  // mainly functional but some weird bugs to be fixed here!!!
  let maxPages = monsterPages;
  let items = [];
  let leftSide = currentPage - 2;
  if (leftSide <= 0) leftSide = 1;
  let rightSide = currentPage + 2;
  if (rightSide > maxPages) rightSide = maxPages;
  for (let number = leftSide; number <= rightSide; number++) {
    items.push(
      <div
        key={number}
        onClick={() => {
          setCurrentPage(number);
          setPageNumber((number - 1) * 10);
        }}
      >
        {number}
      </div>
    );
  }
  const nextPage = () => {
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
      setPageNumber(currentPage * 10);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setPageNumber(currentPage * 10);
    }
  };

  return (
    <div>
      <div> Current Page: {currentPage} </div>
      <div>
        <button onClick={prevPage}> &lsaquo; </button>
        {items.map((item, index) => (
          <button key={index}>{item}</button>
        ))}
        <button onClick={nextPage}> &rsaquo; </button>
      </div>
    </div>
  );
};

export default Paginate;
