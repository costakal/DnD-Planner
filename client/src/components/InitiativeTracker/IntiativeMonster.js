import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Icon from "react-icons-kit";
import { shield } from "react-icons-kit/feather/shield";
import { power } from "react-icons-kit/icomoon/power";
import heart from "../../assets/heart.png";

import { removeMonster, updateHealth } from "../../actions";

const InitiativeMonster = ({ monsterKey }) => {
  const dispatch = useDispatch();

  const monster = useSelector(
    (state) => state.addToInitiative.monsterInit[monsterKey]
  );

  const [greenPercentage, setGreenPercentage] = useState(100);
  const [redPercentage, setRedPercentage] = useState(100);

  useEffect(() => {
    setGreenPercentage(
      Math.floor((monster.current_hit_points / monster.hit_points) * 100 - 5)
    );
    setRedPercentage(
      Math.floor((monster.current_hit_points / monster.hit_points) * 100)
    );
    // eslint-disable-next-line
  }, [monster.current_hit_points]);

  return (
    <Wrapper>
      <button
        onClick={() => {
          dispatch(removeMonster(monster.monsterKey));
        }}
      >
        X
      </button>
      <Header>
        <h2>{monster.name}</h2>
        <div>
          <input />
          <Icon icon={power} />
          <h2>Initative:</h2>
        </div>

        <div>
          <h2>Armor Class:</h2>
          <Icon icon={shield} />
          <p>{monster.armor_class}</p>
        </div>
      </Header>
      <Health>
        <HealthBar
          style={{
            background: `linear-gradient(
    90deg,
    rgba(35, 134, 61, 1) ${greenPercentage}%,
    rgba(179, 0, 0, 1) ${redPercentage}%`,
          }}
        />
        <img src={heart} alt={"heart"} />
      </Health>

      <h2>
        <span>{monster.current_hit_points}</span>/{monster.hit_points}
      </h2>
      <p>
        Damage:
        <input
          onKeyDown={(ev) => {
            if (ev.key === "Enter") {
              const newHealth = monster.current_hit_points - ev.target.value;
              dispatch(updateHealth(newHealth, monsterKey));
            }
          }}
        />
      </p>
      <p>
        Heal:
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
    </Wrapper>
  );
};

export default InitiativeMonster;

const Wrapper = styled.div`
  margin: 15px;
  border: solid 3px black;
`;

const Header = styled.div`
  display: flex;
`;

const Health = styled.div`
  position: relative;
  img {
    position: absolute;
    width: 25px;
    right: 15px;
    top: -5px;
  }
`;

const HealthBar = styled.div`
  margin: 5px 20px;
  border: solid black 1px;
  height: 10px;
  border-radius: 25px;
  z-index: 1;
`;
