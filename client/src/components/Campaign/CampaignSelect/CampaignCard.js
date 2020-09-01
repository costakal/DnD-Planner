// Will have a temporary placeholder as the main campaign - can add new ones, will need to be stored in sever.

import React, { useRef } from "react";
import styled from "styled-components";
import { useDrag, useDrop } from "react-dnd";

const ItemTypes = {
  CARD: "card",
};

export const CampaignCard = ({ id, data, index, moveCard, status }) => {
  const ref = useRef(null);
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
      {data.imageSrc !== "" ? <img src={data.imageSrc} /> : <></>}
      <div>
        <Title> {data.eventTitle}</Title>
        <Location>
          <span>Location: </span> {data.eventLocation}
        </Location>
        <NPC>
          <span>NPC's: </span>
          {data.eventNPC}
        </NPC>
        <Desc>{data.eventDesc}</Desc>
      </div>
    </Wrapper>
  );
};

export default CampaignCard;

const Wrapper = styled.div`
  border: 2px solid black;
  padding: 25px;
  margin-bottom: 25px;
  background: rgba(255, 255, 255, 0.8);
  cursor: move;
  display: flex;
  transition: 0.2s;
  img {
    padding: 0px 20px 0px 0px;
    max-width: 250px;
    max-height: 250px;
    object-fit: cover;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
`;

const Title = styled.p`
  margin: 0px 0px 5px;
  font-weight: bold;
  font-size: 22px;
`;
const Location = styled.p`
  margin: 5px 0px;
  font-style: italic;
  span {
    font-style: normal;
    font-weight: 600;
  }
`;
const NPC = styled.p`
  margin: 5px 0px;
  font-style: italic;
  span {
    font-style: normal;
    font-weight: 600;
  }
`;
const Desc = styled.p`
  font-style: italic;
  margin: 5px 0px;
  padding: 10px 0px;
`;
