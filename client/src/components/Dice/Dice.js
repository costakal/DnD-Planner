import React, { useState } from "react";
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
        <img src={image} style={{ width: "100px" }} />
      </button>
    </Wrapper>
  );
};

export default Dice;

const Wrapper = styled.div``;
