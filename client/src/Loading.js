import React from "react";
import styled from "styled-components";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <Container>
      <Loader type="Watch" color="white" height={100} width={100} />
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  margin: 65px 0px 0px;
  display: flex;
  justify-content: center;
`;
