import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import bg from "../../assets/battle-bg2.jpg";

import SavedEncounter from "./SavedEncounter";
import { getAllEncounters } from "../../actions";
import Loading from "../../Loading";

const SelectEncounters = () => {
  const dispatch = useDispatch();
  const getEncounterData = useSelector((state) => state.encountersReducer);
  const currentUser = useSelector(
    (state) => state.currentUserReducer.currentUser
  );
  const { status, encounters } = getEncounterData;

  console.log(encounters);
  useEffect(() => {
    fetch("/encounters")
      .then((res) => res.json())
      .then((data) => {
        dispatch(getAllEncounters(data));
      });
  }, []);

  return (
    <Wrapper>
      {status === "ready" ? (
        <Content>
          {encounters.length !== 0 ? (
            encounters
              .filter(
                (enc) => enc.userEmail.currentUser.email === currentUser.email
              )
              .map((enc) => <SavedEncounter key={enc._id} encounter={enc} />)
          ) : (
            <div>There are appears to be nothing here! Get Creating!</div>
          )}
        </Content>
      ) : (
        <>
          <Loading />
        </>
      )}
    </Wrapper>
  );
};

export default SelectEncounters;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 50px 0px;
  max-height: 93vh;
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
`;
