import React from "react";
import styled from "styled-components";

const Dice = ({ roll, image, setTotal, setResults }) => {
  return (
    <Wrapper>
      <button
        onClick={() => {
          setTotal(roll.total);
          setResults(roll.output);
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
  }
`;
