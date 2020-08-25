import React from "react";
import styled from "styled-components";

const DiceTray = ({ total, results }) => {
  return (
    <Wrapper>
      <TotalRoll>{total}</TotalRoll>
      <Breakdown>{results}</Breakdown>
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
