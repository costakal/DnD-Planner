import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { getDiceResults } from "../../actions";

const Dice = ({ roll, image }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <button
        onClick={() => {
          dispatch(getDiceResults(roll.output, roll.total));
        }}
      >
        <img alt={image} src={image} style={{ width: "100%" }} />
      </button>
    </Wrapper>
  );
};

export default Dice;

const Wrapper = styled.div`
  button {
    max-width: 100px;
    background: none;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      border-radius: 15px;
      background: rgb(255, 255, 255, 0.5);
    }
  }
`;
