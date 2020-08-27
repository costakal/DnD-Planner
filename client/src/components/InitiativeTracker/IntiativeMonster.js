import React, { useState } from "react";
import styled from "styled-components";
import Icon from "react-icons-kit";
import { shield } from "react-icons-kit/feather/shield";
import { power } from "react-icons-kit/icomoon/power";

const InitiativeMonster = () => {
  const [percentage, setPercentage] = useState();

  return (
    <Wrapper>
      <h2>
        Initative: <span>21</span> <Icon icon={power} />
      </h2>
      <h2>Aboleth</h2>
      <div>
        <h2>Armor Class:</h2>
        <Icon icon={shield} />
        <p>18</p>
      </div>
      <HealthBar></HealthBar>
      <h2>
        <span>68</span>/100
      </h2>
      <p>
        Damage: <input />
      </p>
      <p>
        Heal: <input />
      </p>
    </Wrapper>
  );
};

export default InitiativeMonster;

const Wrapper = styled.div`
  margin: 15px;
  border: solid 3px black;
`;

const HealthBar = styled.div`
  margin: 5px;
  border: solid black 1px;
  height: 10px;
  border-radius: 25px;
  background: green;
`;
