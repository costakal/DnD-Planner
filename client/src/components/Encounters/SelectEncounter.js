import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import bg from "../../assets/battle-bg2.jpg";

import SavedEncounter from "./SavedEncounter";
import { getAllEncounters } from "../../actions";

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
        <>
          {encounters.length !== 0 ? (
            encounters
              .filter(
                (enc) => enc.userEmail.currentUser.email === currentUser.email
              )
              .map((enc) => <SavedEncounter key={enc._id} encounter={enc} />)
          ) : (
            <div>There are appears to be nothing here! Get Creating!</div>
          )}
        </>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

export default SelectEncounters;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 50px;
`;
