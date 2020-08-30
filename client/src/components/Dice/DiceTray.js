import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const DiceTray = ({ total, results }) => {
  const { lastRoll, rollBeforeLast } = useSelector(
    (state) => state.diceReducer
  );

  return (
    <Wrapper>
      <TotalRoll>{total}</TotalRoll>
      <Breakdown>{results}</Breakdown>
      <div>
        <p>Past Results:</p>
        <p>{lastRoll}</p>
        <p>{rollBeforeLast}</p>
      </div>
    </Wrapper>
  );
};

export default DiceTray;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  border: black solid 2px;
`;

const TotalRoll = styled.div`
  font-size: 80px;
  padding: 20px;
`;

const Breakdown = styled.div``;
