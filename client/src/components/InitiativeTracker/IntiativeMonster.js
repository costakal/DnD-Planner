import React, { useState } from "react";
import styled from "styled-components";

const InitiativeMonster = () => {
  const [health, setHealth] = useState();
  return (
    <Wrapper>
      <h2>Aboleth</h2>
      <h2>Armor Class:</h2>
      <div>(health bar)</div>
      <h2>
        <span>68</span>/100
      </h2>
    </Wrapper>
  );
};

export default InitiativeMonster;

const Wrapper = styled.div`
  margin: 15px;
  border: solid 3px black;
`;
