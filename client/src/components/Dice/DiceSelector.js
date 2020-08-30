import React, { useState } from "react";
import { DiceRoller } from "rpg-dice-roller";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Dice from "./Dice";
import DiceTray from "./DiceTray";
import {
  updateDiceAmount,
  updateModifier,
  getDiceResults,
} from "../../actions";

import d4 from "../../assets/d4.svg";
import d6 from "../../assets/d6.svg";
import d8 from "../../assets/d8.svg";
import d10 from "../../assets/d10.svg";
import d12 from "../../assets/d12.svg";
import d20 from "../../assets/d20.svg";

const DiceSelector = () => {
  const dispatch = useDispatch();
  const dice = useSelector((state) => state.diceReducer);
  const { diceAmount, total, results, modifier } = dice;

  const roller = new DiceRoller();

  const rollD4 = roller.roll(`${diceAmount}d4+${modifier}`);
  const rollD6 = roller.roll(`${diceAmount}d6+${modifier}`);
  const rollD8 = roller.roll(`${diceAmount}d8+${modifier}`);
  const rollD10 = roller.roll(`${diceAmount}d10+${modifier}`);
  const rollD12 = roller.roll(`${diceAmount}d12+${modifier}`);
  const rollD20 = roller.roll(`${diceAmount}d20+${modifier}`);

  return (
    <Wrapper>
      <DiceTray total={total} results={results} />
      <DiceModifiers>
        <input
          maxLength="3"
          value={diceAmount}
          onChange={(ev) => {
            dispatch(updateDiceAmount(ev.target.value));
          }}
        />
        <p>d+</p>
        <input
          value={modifier}
          onChange={(ev) => {
            if (ev.target.value !== "") {
              dispatch(updateModifier(ev.target.value));
            }
          }}
        />
      </DiceModifiers>
      <DiceOptions>
        <Dice roll={rollD4} image={d4} results={results} total={total} />
        <Dice roll={rollD6} image={d6} results={results} total={total} />
        <Dice roll={rollD8} image={d8} results={results} total={total} />
        <Dice roll={rollD10} image={d10} results={results} total={total} />
        <Dice roll={rollD12} image={d12} results={results} total={total} />
        <Dice roll={rollD20} image={d20} results={results} total={total} />
      </DiceOptions>
      <button
        onClick={() => {
          dispatch(getDiceResults("", ""));
        }}
      >
        Clear
      </button>
    </Wrapper>
  );
};

export default DiceSelector;

const Wrapper = styled.div`
  align-self: flex-end;
  flex-grow: 1;
  height: 400px;
  border: 3px solid black;
  margin: 15px;
  background-color: rgb(255, 255, 255, 0.8);
  width: 100%;
  max-width: 500px;
  border-radius: 3px;
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
