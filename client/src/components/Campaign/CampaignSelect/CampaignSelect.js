import React from "react";
import styled from "styled-components";
import bg from "../../../assets/battle-bg.jpg";

const CampaignSelect = () => {
  return <Wrapper></Wrapper>;
};

export default CampaignSelect;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
