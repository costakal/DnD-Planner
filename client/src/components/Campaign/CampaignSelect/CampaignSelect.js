import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import bg from "../../../assets/battle-bg.jpg";
import update from "immutability-helper";

import CampaignCard from "./CampaignCard";
import AddNewCard from "./AddNewCard";
import { getAllEvents, loadAllEvents } from "../../../actions";

const CampaignSelect = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.getEvents);
  const [viewNewCardModal, setViewNewCardModal] = useState(false);

  useEffect(() => {
    fetch("/events")
      .then((res) => res.json())
      .then((array) => {
        // dispatch(loadAllEvents());
        // dispatch(getAllEvents(array));
        setCards(array);
      });
  }, []);

  const [cards, setCards] = useState([
    ///id is required to work well make sute to incorporate
    { id: "543254325435344dsaf", text: "Hello" },
    { id: "gdgt", text: "dungeons" },
    { id: 31, text: "dragons" },
    { id: 543, text: "scary monsters!!!" },
  ]);

  const handleClose = () => {
    setViewNewCardModal(false);
  };

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = cards[dragIndex];
      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      );
    },
    [cards]
  );

  const renderCard = (card, index) => {
    return (
      <CampaignCard
        key={card._id}
        index={index}
        id={card._id}
        data={card.data}
        status={cards.status}
        moveCard={moveCard}
      />
    );
  };
  return (
    <Wrapper>
      {viewNewCardModal ? <AddNewCard handleClose={handleClose} /> : <></>}
      <CardSection style={{ width: "400" }}>
        <button
          onClick={() => {
            setViewNewCardModal(true);
          }}
        >
          Add to your Campaign
        </button>
        {cards.map((card, index) => renderCard(card, index))}
      </CardSection>
    </Wrapper>
  );
};

export default CampaignSelect;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const CardSection = styled.div`
  margin: 65px 15px 15px;
`;

// {
//   id: 1,
//   text: "Write a cool JS library",
// },
// {
//   id: 2,
//   text: "Make it generic enough",
// },
// {
//   id: 3,
//   text: "Write README",
// },
// {
//   id: 4,
//   text: "Create some examples",
// },
// {
//   id: 5,
//   text:
//     "Spam in Twitter and IRC to promote it (note that this element is taller than the others)",
// },
// {
//   id: 6,
//   text: "???",
// },
// {
//   id: 7,
//   text: "DUngeons and drag000ns",
// },
