import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import MonsterDetails from "./MonsterDetails";
import { loadAddMonster, addMonster } from "../../actions";

const MonsterItem = ({ monster }) => {
  const dispatch = useDispatch();
  const monsterData = useSelector((state) => state.monsterDetailsReducer);

  const [detailsVisible, setDetailsVisible] = useState(false);

  return (
    <Wrapper>
      {monsterData.status === "ready" ? (
        <>
          <MonsterInfo>
            <Details>
              <li key={monster.index}>{monster.name}</li>
              <p style={{ fontStyle: "italic", color: "red" }}>
                {monster.type}
              </p>
              <p>Challenge Rating: {monster.challenge_rating}</p>
            </Details>
            <Controls>
              <button
                onClick={() => {
                  dispatch(loadAddMonster());
                  dispatch(addMonster(monster));
                }}
              >
                Add to Combat
              </button>
              <button onClick={() => setDetailsVisible(!detailsVisible)}>
                More Details
              </button>
            </Controls>
          </MonsterInfo>

          {detailsVisible ? (
            <MonsterDetails status={monsterData.status} monster={monster} />
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

export default MonsterItem;

const Wrapper = styled.div`
  margin: 5px 10px;
  border: 1px dashed grey;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8);
`;

const MonsterInfo = styled.div`
  display: flex;
`;

const Controls = styled.div``;

const Details = styled.div``;
