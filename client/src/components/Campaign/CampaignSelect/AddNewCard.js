import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { saveEvent } from "../../../actions";

const AddNewCard = ({ handleClose }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.addNewEvent);

  const [eventTitle, setEventTitle] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventNPC, setEventNPC] = useState("");
  const [eventDesc, setEventDesc] = useState("");

  return (
    <>
      <Wrapper>
        <Mask onClick={handleClose}></Mask>
        <ModalContent>
          <label>New Event Title:</label>
          <input
            value={eventTitle}
            onChange={(ev) => {
              setEventTitle(ev.target.value);
            }}
          />
          <label>Location: </label>
          <input
            value={eventLocation}
            onChange={(ev) => {
              setEventLocation(ev.target.value);
            }}
          />
          <label>NPC('s): </label>
          <input
            value={eventNPC}
            onChange={(ev) => {
              setEventNPC(ev.target.value);
            }}
          />
          <label>Event Details</label>
          <textarea
            value={eventDesc}
            placeholder="Use this space to describe this room/location, NPC or event."
            onChange={(ev) => {
              setEventDesc(ev.target.value);
            }}
          />
          <button
            onClick={() => {
              dispatch(
                saveEvent(eventTitle, eventNPC, eventDesc, eventLocation)
              );
              // fetch("/saveEvent", {
              //   method: "POST",
              //   headers: {
              //     Accept: "application/json",
              //     "Content-Type": "application/json",
              //   },
              //   body: JSON.stringify(),
              // })
              //   .then((res) => res.json())
              //   .then((data) => {
              //     console.log(data);
              //   })
              //   .catch((err) => {
              //     console.error(err);
              //   });
              handleClose();
            }}
          >
            Save
          </button>
        </ModalContent>
      </Wrapper>
    </>
  );
};

export default AddNewCard;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  z-index: 10;
  max-height: 100vh;
  overflow-y: auto;
`;
const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.8;
  z-index: 50;
`;
const ModalContent = styled.div`
  position: relative;
  margin: 50px;
  min-height: 100%;
  border-radius: 2px;
  background: white;
  z-index: 100;
  display: flex;
  flex-direction: column;
  padding: 50px;
`;
