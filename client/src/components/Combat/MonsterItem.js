import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Icon from "react-icons-kit";
import { ic_add_circle } from "react-icons-kit/md/ic_add_circle";
import { ic_arrow_drop_down_circle } from "react-icons-kit/md/ic_arrow_drop_down_circle";

import MonsterDetails from "./MonsterDetails";
import { loadAddMonster, addMonster } from "../../actions";
import { COLORS } from "../../constants";

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
              <p style={{ fontStyle: "italic", color: COLORS.primary }}>
                {monster.type}
              </p>
              <p>Challenge Rating: {monster.challenge_rating}</p>
            </Details>
            <Controls>
              <Button
                onClick={() => {
                  dispatch(loadAddMonster());
                  dispatch(addMonster(monster));
                }}
              >
                <Icon icon={ic_add_circle} />
              </Button>
              <Button onClick={() => setDetailsVisible(!detailsVisible)}>
                <Icon icon={ic_arrow_drop_down_circle} />
              </Button>
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
  justify-content: space-between;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Details = styled.div``;

const Button = styled.div`
  background: none;
  border: none;
  color: ${COLORS.primary};
  transition: 0.2s;
  cursor: pointer;
  svg {
    width: 25px;
    height: 25px;
  }
  &:hover {
    color: black;
  }
`;
