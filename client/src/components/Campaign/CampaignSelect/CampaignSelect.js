import React, { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import bg from "../../../assets/battle-bg.jpg";
import update from "immutability-helper";

import CampaignCard from "./CampaignCard";
import AddNewCard from "./AddNewCard";
import Loading from "../../../Loading";
import { COLORS } from "../../../constants";

const CampaignSelect = () => {
  const [cards, setCards] = useState([]);
  const [status, setStatus] = useState("idle");
  const [viewNewCardModal, setViewNewCardModal] = useState(false);
  const user = useSelector((state) => state.currentUserReducer);

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

  console.log(cards);

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
          <Container>
            <SideNav>
              <button
                onClick={() => {
                  setViewNewCardModal(true);
                }}
              >
                Add to your Campaign
              </button>
            </SideNav>
            {/* {user.status === "ready" ? ( */}
            <CardSection style={{ width: "400" }}>
              {cards
                // .filter(
                //   (enc) =>
                //     enc.data.user.currentUser.email === user.currentUser.email
                // )
                .map((card, index) => renderCard(card, index))}
            </CardSection>
            {/* ) : (
              <></>
            )} */}
          </Container>
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

const Container = styled.div`
  position: relative;
  display: flex;
  margin: 53px 0px 0px;
  max-height: 100vh;
  width: 100%;
  overflow-y: auto;
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
  div {
    button {
      width: 200px;
      margin: 25px;
      padding: 5px 10px;
      text-align: center;
      background: ${COLORS.primary};
      transition: 0.2s;
      border: none;
      color: white;
      cursor: pointer;
      &:hover {
        background: black;
      }
    }
  }
`;

const SideNav = styled.div`
  border: 3px solid black;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  margin: 25px 0px 25px 40px;
  height: 85px;
`;

const CardSection = styled.div`
  margin: 25px 40px;
`;
