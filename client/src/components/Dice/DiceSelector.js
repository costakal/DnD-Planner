import React, { useState } from "react";
import { DiceRoller } from "rpg-dice-roller";
import styled from "styled-components";

import Dice from "./Dice";
import DiceTray from "./DiceTray";

import d4 from "../../assets/d4.svg";
import d6 from "../../assets/d6.svg";
import d8 from "../../assets/d8.svg";
import d10 from "../../assets/d10.svg";
import d12 from "../../assets/d12.svg";
import d20 from "../../assets/d20.svg";

const DiceSelector = () => {
  const [diceTotal, setDiceTotal] = useState(1);
  const [modifier, setModifier] = useState(0);
  const [results, setResults] = useState("");
  const [total, setTotal] = useState("");
  const roller = new DiceRoller();

  const rollD4 = roller.roll(`${diceTotal}d4+${modifier}`);
  const rollD6 = roller.roll(`${diceTotal}d6+${modifier}`);
  const rollD8 = roller.roll(`${diceTotal}d8+${modifier}`);
  const rollD10 = roller.roll(`${diceTotal}d10+${modifier}`);
  const rollD12 = roller.roll(`${diceTotal}d12+${modifier}`);
  const rollD20 = roller.roll(`${diceTotal}d20+${modifier}`);

  return (
    <Wrapper>
      <DiceTray total={total} results={results} />
      <DiceModifiers>
        <input
          maxlength="3"
          value={diceTotal}
          onChange={(ev) => {
            setDiceTotal(ev.target.value);
          }}
        />
        <p>d+</p>
        <input
          onChange={(ev) => {
            if (ev.target.value !== "") {
              setModifier(ev.target.value);
            }
          }}
        />
      </DiceModifiers>
      <DiceOptions>
        <Dice
          roll={rollD4}
          image={d4}
          setResults={setResults}
          setTotal={setTotal}
        />
        <Dice
          roll={rollD6}
          image={d6}
          setResults={setResults}
          setTotal={setTotal}
        />
        <Dice
          roll={rollD8}
          image={d8}
          setResults={setResults}
          setTotal={setTotal}
        />
        <Dice
          roll={rollD10}
          image={d10}
          setResults={setResults}
          setTotal={setTotal}
        />
        <Dice
          roll={rollD12}
          image={d12}
          setResults={setResults}
          setTotal={setTotal}
        />
        <Dice
          roll={rollD20}
          image={d20}
          setResults={setResults}
          setTotal={setTotal}
        />
      </DiceOptions>
    </Wrapper>
  );
};

export default DiceSelector;

const Wrapper = styled.div`
  width: 600px;
  height: 400px;
  border: solid 2px black;
`;

const DiceModifiers = styled.div`
  display: flex;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  p {
  }
  input {
    font-size: 30px;
    width: 50px;
    text-align: right;
  }
  button {
  }
  font-size: 30px;
`;

const DiceOptions = styled.div`
  display: flex;
`;
