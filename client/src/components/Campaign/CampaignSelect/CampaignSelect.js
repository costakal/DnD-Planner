import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import bg from "../../../assets/battle-bg.jpg";
import update from "immutability-helper";

import CampaignCard from "./CampaignCard";
import AddNewCard from "./AddNewCard";
import Loading from "../../../Loading";

const CampaignSelect = () => {
  const [cards, setCards] = useState([]);
  const [status, setStatus] = useState("idle");
  const [viewNewCardModal, setViewNewCardModal] = useState(false);

  useEffect(() => {
    fetch("/events")
      .then((res) => res.json())
      .then((array) => {
        setStatus("loading");
        setCards(array);
        setStatus("ready");
      });
  }, []);

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
      {status === "ready" ? (
        <>
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
        </>
      ) : (
        <Loading />
      )}
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
