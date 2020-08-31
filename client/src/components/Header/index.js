import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import SignIn from "../SignIn";
import { COLORS } from "../../constants";

const Header = () => {
  const loggedIn = useSelector((state) => state.currentUserReducer.currentUser);

  return (
    <Wrapper>
      <Nav>
        <NavLink
          exact
          to="/"
          activeStyle={{
            color: `${COLORS.primary}`,
            textShadow: "none",
            backgroundImage: "none",
          }}
        >
          About
        </NavLink>
        <NavLink
          exact
          to="/campaign"
          activeStyle={{
            color: `${COLORS.primary}`,
            textShadow: "none",
            backgroundImage: "none",
          }}
        >
          Campaign
        </NavLink>
        <NavLink
          exact
          to="/encounters"
          activeStyle={{
            color: `${COLORS.primary}`,
            textShadow: "none",
            backgroundImage: "none",
          }}
        >
          Encounters
        </NavLink>
        <NavLink
          exact
          to="/combat"
          activeStyle={{
            color: `${COLORS.primary}`,
            textShadow: "none",
            backgroundImage: "none",
          }}
        >
          Combat
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
  padding: 0px 50px;
  a {
    text-shadow: 1px 2px 4px #000000;
    padding: 0px 35px;
    font-size: 1.5em;
    color: white;
    text-decoration: none;
    color: #fff;

    background-image: linear-gradient(180deg, transparent 68%, #ad1010 0);
    background-repeat: no-repeat;
    background-size: 0 100%;
    transition: background-size 0.4s ease;
  }
  a:hover {
    background-size: 100% 100%;
  }
`;

// ADD THIS WHEN ITS ALL SET UP!

// const loggedIn = useSelector((state) => state.currentUserReducer.currentUser);

// return (
//   <>
//     {loggedIn ? (
//       <Wrapper>
//         <Nav>
//           <NavLink exact to="/campaign" activeStyle={{ color: "red" }}>
//             Campaign
//           </NavLink>
//           <NavLink exact to="/encounters" activeStyle={{ color: "red" }}>
//             Encounters
//           </NavLink>
//           <NavLink exact to="/combat" activeStyle={{ color: "red" }}>
//             Combat
//           </NavLink>
//         </Nav>
//         <SignIn />
//       </Wrapper>
//     ) : (
//       <Wrapper>
//         <Nav>
//           <NavLink exact to="/" activeStyle={{ color: "red" }}>
//             About
//           </NavLink>
//         </Nav>
//         <SignIn />
//       </Wrapper>
//     )}
//   </>
// );
// };
