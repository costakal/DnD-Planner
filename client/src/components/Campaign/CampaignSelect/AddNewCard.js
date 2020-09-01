import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { saveEvent, loadEvent } from "../../../actions";
import { COLORS } from "../../../constants";

const AddNewCard = ({ handleClose }) => {
  const dispatch = useDispatch();

  const newEvent = useSelector((state) => state.addNewEvent);
  const user = useSelector((state) => state.currentUserReducer);

  const [eventTitle, setEventTitle] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventNPC, setEventNPC] = useState("");
  const [eventDesc, setEventDesc] = useState("");
  const [image, setImage] = useState({});
  const [imageSrc, setImageSrc] = useState("");
  const [imageUploaded, setImageUploaded] = useState(false);

  const fileOnChange = (event) => {
    setImage(event.target.files[0]);
  };

  const sendImage = () => {
    let formData = new FormData();
    formData.append("imageSrc", image);
    fetch("/uploadFile", {
      method: "post",
      body: formData,
    })
      .then((res) => res.text())
      .then((data) => {
        setImageSrc(data);
      });
  };

  return (
    <>
      <Wrapper>
        <Mask
          onClick={() => {
            handleClose();
            setImageUploaded(false);
          }}
        ></Mask>
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
            rows="10"
            value={eventDesc}
            placeholder="Use this space to describe this room/location, NPC or event. Consider adding flavor text, or anything else that will help describe your event"
            onChange={(ev) => {
              setEventDesc(ev.target.value);
            }}
          />
          <label>Upload an Image</label>
          <div>
            <input type="file" onChange={fileOnChange} />
            {!imageUploaded ? (
              <button
                onClick={() => {
                  sendImage();
                  setImageUploaded(true);
                }}
              >
                Upload
              </button>
            ) : (
              <p style={{ color: "darkgreen" }}>Succesfully Uploaded</p>
            )}
          </div>
          {newEvent.status === "ready" ? (
            <button
              onClick={() => {
                fetch("/saveEvent", {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(newEvent),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(data);
                  })
                  .catch((err) => {
                    console.error(err);
                  });
                dispatch(loadEvent("idle"));
                handleClose();
                setImageUploaded(false);
              }}
            >
              Post
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch(loadEvent("loading"));
                dispatch(
                  saveEvent(
                    eventTitle,
                    eventNPC,
                    eventDesc,
                    eventLocation,
                    user,
                    imageSrc
                  )
                );
              }}
            >
              Save
            </button>
          )}
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
  margin: 50px 350px;
  min-height: 100%;
  border-radius: 2px;
  background: white;
  z-index: 100;
  display: flex;
  flex-direction: column;
  padding: 50px;
  label {
    padding: 0px 0px 5px;
    font-size: 16px;
    font-weight: 600;
  }
  textarea {
    margin: 0px 0px 5px;
    font-size: 16px;
    font-weight: 600;
  }
  input {
    font-size: 16px;
    margin: 0px 0px 15px;
  }
  div {
    margin: 10px 0px;
    border: dashed lightgrey 1px;
    padding: 15px 0px;
    display: flex;
    flex-direction: column;
    button {
      width: 200px;
    }
  }
  button {
    background: ${COLORS.primary};
    border: none;
    cursor: pointer;
    color: white;
    padding: 5px 10px;
    transition: 0.2s;
    &:hover {
      background: black;
    }
  }
`;
