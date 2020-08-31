import React, { useState } from "react";
import styled from "styled-components";

import Icon from "react-icons-kit";
import { arrowLeft } from "react-icons-kit/typicons/arrowLeft";
import { arrowRight } from "react-icons-kit/typicons/arrowRight";

import { COLORS } from "../../constants";

const Paginate = ({ setPageNumber }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const monsterPages = Math.ceil(322 / 10);

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
    <Wrapper>
      <div>
        <button onClick={prevPage}>
          <Icon icon={arrowLeft} />
        </button>
        {items.map((item, index) => (
          <button key={index}>{item}</button>
        ))}
        <button onClick={nextPage}>
          <Icon icon={arrowRight} />
        </button>
      </div>
      <h2>Page: {currentPage} </h2>
    </Wrapper>
  );
};

export default Paginate;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  h2 {
    padding: 5px 10px;
  }
  div {
    button {
      cursor: pointer;
      width: 30px;
      height: 30px;
      margin: 5px;
      background: white;
      border-radius: 15px;
      border: none;
      &:hover {
        background: ${COLORS.primary};
        color: white;
      }
    }
  }
`;
