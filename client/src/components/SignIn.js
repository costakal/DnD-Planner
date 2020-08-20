import React, { useContext } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

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
              <p>Welcome {user.currentUser.displayName}</p>
              <UserAvatar src={user.currentUser.photoURL} style={{}} />
              <button onClick={handleSignOut}>Sign Out</button>
            </CurrentUserWrapper>
          ) : (
            <div>
              <button onClick={handleSignIn}>Sign In</button>
            </div>
          )}
        </Wrapper>
      )}
    </>
  );
};

export default SignIn;

const Wrapper = styled.div`
  padding: 0px 70px;
`;

const CurrentUserWrapper = styled.div`
  color: white;
  display: flex;
`;

const UserAvatar = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 25px;
`;
