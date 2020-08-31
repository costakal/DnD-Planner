import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Icon from "react-icons-kit";
import { shield } from "react-icons-kit/feather/shield";
import { power } from "react-icons-kit/icomoon/power";
import { x } from "react-icons-kit/feather/x";

import { removeMonster, updateHealth } from "../../actions";
import MonsterModal from "../Combat/MonsterModal";
import { COLORS } from "../../constants";

const InitiativeMonster = ({ monsterKey }) => {
  const dispatch = useDispatch();

  const monster = useSelector(
    (state) => state.addToInitiative.monsterInit[monsterKey]
  );

  const [monsterModalVisible, setMonsterModalVisible] = useState(false);
  const [fullPercentage, setFullPercentage] = useState(100);
  const [emptyPercentage, setEmptyPercentage] = useState(100);

  useEffect(() => {
    setFullPercentage(
      Math.floor((monster.current_hit_points / monster.hit_points) * 100 - 5)
    );
    setEmptyPercentage(
      Math.floor((monster.current_hit_points / monster.hit_points) * 100)
    );
    // eslint-disable-next-line
  }, [monster.current_hit_points]);

  return (
    <>
      {monsterModalVisible === true ? (
        <MonsterModal
          monster={monster}
          setMonsterModalVisible={setMonsterModalVisible}
          monsterModalVisible={monsterModalVisible}
        />
      ) : (
        <></>
      )}
      <Wrapper>
        <CloseButton
          onClick={() => {
            dispatch(removeMonster(monster.monsterKey));
          }}
        >
          <Icon style={{ color: "white" }} icon={x} />
        </CloseButton>
        <Header>
          <MonsterName
            onClick={() => {
              setMonsterModalVisible(true);
            }}
          >
            {monster.name}
          </MonsterName>
          <div>
            <Init>
              <div>
                <input />
                <Icon icon={power} />
              </div>
              <h2>INITIATIVE</h2>
            </Init>
            <AC>
              <Icon icon={shield} />
              <p>{monster.armor_class}</p>
              <h2>ARMOR CLASS</h2>
            </AC>
          </div>
        </Header>
        <Health>
          <HealthBar
            style={{
              background: `linear-gradient(
    90deg,
    rgba(173, 16, 16, 1) ${fullPercentage}%,
    rgba(0, 0, 0, 0) ${emptyPercentage}%`,
            }}
          />
          <NumericalHP>
            <span>{monster.current_hit_points}</span>/{monster.hit_points}
          </NumericalHP>
        </Health>
        <div style={{ display: "flex", alignItems: "center" }}>
          <HealthMods>
            <p>
              Dmg
              <input
                onKeyDown={(ev) => {
                  if (ev.key === "Enter") {
                    const newHealth =
                      monster.current_hit_points - ev.target.value;
                    dispatch(updateHealth(newHealth, monsterKey));
                  }
                }}
              />
            </p>
            <p>
              Heal
              <input
                onKeyDown={(ev) => {
                  if (ev.key === "Enter") {
                    const newHealth =
                      monster.current_hit_points + Number(ev.target.value);
                    dispatch(updateHealth(newHealth, monsterKey));
                  }
                }}
              />
            </p>
          </HealthMods>
          <Conditions>
            <label>COND.</label>
            <input type="text" />
          </Conditions>
        </div>
      </Wrapper>
    </>
  );
};

export default InitiativeMonster;

const Wrapper = styled.div`
  position: relative;
  margin: 5px 10px;
  border: 2px solid black;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  transition: 0.2s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
  }
`;

const MonsterName = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  font-weight: 600;
  transition: 0.2s;
  text-align: left;
  padding: 0px 20px 0px 5px;
  cursor: pointer;
  &:hover {
    color: ${COLORS.primary};
  }
`;

const Init = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  input {
    width: 25px;
    background: none;
    border-radius: 15px;
    border: black solid 2px;
    width: 40px;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    &:focus {
      background: white;
    }
    &:hover {
      background: white;
    }
  }
  h2 {
    margin-top: 5px;
    font-size: 11px;
    justify-content: flex-end;
  }
`;

const AC = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-size: 11px;
  i {
    position: absolute;
    top: 0px;
    svg {
      height: 38px;
      width: 38px;
    }
  }
  p {
    margin: 10px;
    font-size: 18px;
    font-weight: bold;
  }
  h2 {
  }
`;

const Health = styled.div`
  position: relative;
  margin: 10px 0px 10px;
`;

const HealthBar = styled.div`
  margin: 5px 10px;
  border: solid black 2px;
  height: 10px;
  border-radius: 25px;
  z-index: 1;
`;

const NumericalHP = styled.div`
  background: white;
  color: black;
  border: 2px solid black;
  position: absolute;
  right: 0px;
  padding: 3px;
  top: -5px;
`;

const HealthMods = styled.div`
  display: flex;
  text-transform: uppercase;
  align-items: center;
  p {
    display: flex;
    align-items: center;
    margin-right: 8px;
  }
  input {
    background: none;
    border-radius: 15px;
    border: black solid 2px;
    width: 40px;
    font-size: 16px;
    text-align: center;
    &:focus {
      background: white;
    }
    &:hover {
      background: white;
    }
  }
`;

const Conditions = styled.div`
  padding: 0px 8px;
  input {
    background: none;
    border-radius: 15px;
    border: black solid 2px;
    font-size: 16px;
    width: 150px;
    padding: 0px 10px;
    &:focus {
      background: white;
    }
    &:hover {
      background: white;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: -8px;
  top: -8px;
  background: ${COLORS.primary};
  border: black solid 2px;
  width: 30px;
  height: 30px;
  border-radius: 25px;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background: black;
  }
`;
