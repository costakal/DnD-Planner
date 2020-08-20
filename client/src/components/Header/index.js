import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import SignIn from "../SignIn";

const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <NavLink exact to="/" activeStyle={{ color: "red" }}>
          About
        </NavLink>
        <NavLink exact to="/fake" activeStyle={{ color: "red" }}>
          Features
        </NavLink>
      </Nav>
      <SignIn />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid black;
`;

const Nav = styled.div`
  a {
    color: black;
  }
`;
