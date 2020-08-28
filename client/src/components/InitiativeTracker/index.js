import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import update from "immutability-helper";

import InitiativeMonster from "./IntiativeMonster";
import { addMonster } from "../../actions";

const InitiativeTracker = () => {
  const dispatch = useDispatch();
  const initiative = useSelector((state) => state.addToInitiative);

  console.log(initiative.monsterArray);

  const [cards, setCards] = useState(initiative.monsterArray);

  console.log(cards);

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      console.log(dragIndex);
      const dragCard = initiative.monsterArray[dragIndex];
      dispatch(
        addMonster(
          update(initiative.monsterArray, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard],
            ],
          })
        )
      );
    },
    [initiative.monsterArray]
  );

  return (
    <Wrapper>
      {initiative.status === "ready" ? (
        <>
          {Object.keys(initiative.monsterInit).map((key, index) => (
            <InitiativeMonster
              key={key}
              monsterKey={key}
              index={index}
              id={index}
              moveCard={moveCard}
            />
          ))}
        </>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

export default InitiativeTracker;

const Wrapper = styled.div`
  border: 3px solid black;
  margin: 15px;
  background-color: rgb(255, 255, 255, 0.8);
  width: 100%;
  max-width: 500px;
  max-height: 100vh;
  overflow-y: auto;
  border-radius: 3px;
  flex-grow: 2;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
    transition: 0.2s;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #666;
  }
`;
