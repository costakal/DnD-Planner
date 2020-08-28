import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useDrag, useDrop } from "react-dnd";

import Icon from "react-icons-kit";
import { shield } from "react-icons-kit/feather/shield";
import { power } from "react-icons-kit/icomoon/power";
import heart from "../../assets/heart.png";

import { removeMonster, updateHealth } from "../../actions";

const ItemTypes = {
  CARD: "card",
};

const InitiativeMonster = ({ monsterKey, id, index, moveCard }) => {
  const ref = useRef(null);
  const dispatch = useDispatch();

  const monster = useSelector(
    (state) => state.addToInitiative.monsterInit[monsterKey]
  );
  const monsterArray = useSelector(
    (state) => state.addToInitiative.monsterInit
  );

  const [greenPercentage, setGreenPercentage] = useState(100);
  const [redPercentage, setRedPercentage] = useState(100);
  const [initiative, setInitiative] = useState(null);

  useEffect(() => {
    setGreenPercentage(
      Math.floor((monster.current_hit_points / monster.hit_points) * 100 - 5)
    );
    setRedPercentage(
      Math.floor((monster.current_hit_points / monster.hit_points) * 100)
    );
  }, [monster.current_hit_points]);

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <Wrapper ref={ref} style={{ opacity }}>
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
          <input value={initiative} />
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
        <img src={heart} />
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
