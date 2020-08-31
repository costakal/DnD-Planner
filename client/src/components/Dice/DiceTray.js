import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { getDiceResults } from "../../actions";
import { COLORS } from "../../constants";
import icon from "../../assets/dice-icon.png";

const DiceTray = ({ total, results }) => {
  const dispatch = useDispatch();
  const { lastRoll, rollBeforeLast } = useSelector(
    (state) => state.diceReducer
  );

  return (
    <Wrapper>
      <Results>
        <TotalRoll>{total}</TotalRoll>
        <Breakdown>{results}</Breakdown>
        <img src={icon} />
      </Results>
      <Past>
        <div>
          <p>Past Results:</p>
          <p>{lastRoll}</p>
          <p>{rollBeforeLast}</p>
        </div>
        <button
          onClick={() => {
            dispatch(getDiceResults("", ""));
          }}
        >
          Clear
        </button>
      </Past>
    </Wrapper>
  );
};

export default DiceTray;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 210px;
  border-bottom: black solid 2px;
`;

const TotalRoll = styled.div`
  font-size: 80px;
  padding: 40px 20px 5px;
  text-shadow: 2px 2px 14px #ffffff;
  z-index: 2;
`;

const Breakdown = styled.div`
  text-shadow: 2px 2px 14px #ffffff;
  z-index: 2;
`;

const Results = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 2;
  img {
    position: absolute;
    opacity: 0.1;
    z-index: 1;
  }
`;

const Past = styled.div`
  flex-grow: 1;
  display: flex;
  width: 100%;
  margin: 5px;
  justify-content: space-between;
  align-items: flex-end;
  button {
    margin-right: 10px;
    padding: 5px 10px;
    background: ${COLORS.primary};
    cursor: pointer;
    border: none;
    color: white;
    transition: 0.2s;
    &:hover {
      background: black;
    }
  }
  div {
    margin-left: 10px;
    line-height: 1.2em;
    p {
      text-shadow: 2px 2px 14px #ffffff;
    }
  }
`;
