import React, { useContext } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { COLORS } from "../constants";

import { AppContext } from "./AppContext";

const SignIn = () => {
  const user = useSelector((state) => state.currentUserReducer);
  const { handleSignIn, handleSignOut } = useContext(AppContext);

  return (
    <>
      {user.status === "loading" ? (
        <div></div>
      ) : (
        <Wrapper>
          {user.currentUser !== null ? (
            <CurrentUserWrapper>
              <p>
                Welcome {user.currentUser.displayName.split(" ").slice(0, -1)}
              </p>
              <UserAvatar src={user.currentUser.photoURL} />
              <SignInBut onClick={handleSignOut}>Sign Out</SignInBut>
            </CurrentUserWrapper>
          ) : (
            <div>
              <SignInBut onClick={handleSignIn}>Sign In</SignInBut>
            </div>
          )}
        </Wrapper>
      )}
    </>
  );
};

export default SignIn;

const Wrapper = styled.div`
  position: relative;
  padding: 0px 50px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CurrentUserWrapper = styled.div`
  color: white;
  display: flex;
`;

const UserAvatar = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 25px;
  margin: 0px 15px;
`;

const SignInBut = styled.button`
  padding: 5px 10px;
  background: none;
  border: 2px solid white;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: ${COLORS.primary};
    border: 2px solid ${COLORS.primary};
  }
`;
