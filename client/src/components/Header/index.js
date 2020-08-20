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
  position: fixed;
  height: 50px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid white;
  background-color: transparent;
`;

const Nav = styled.div`
  padding: 0px 70px;
  a {
    padding: 0px 35px;
    font-size: 1.5em;
    color: white;
    text-decoration: none;
  }
`;
