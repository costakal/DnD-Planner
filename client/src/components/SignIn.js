import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { AppContext, firebaseAppAuth } from "./AppContext";
import { addCurrentUser } from "../actions";

const SignIn = () => {
  const user = useSelector((state) => state.userReducer);
  const { signInWithGoogle } = useContext(AppContext);

  const dispatch = useDispatch();

  console.log(user);

  const handleSignIn = () => {
    signInWithGoogle();
    firebaseAppAuth.onAuthStateChanged((user) => {
      dispatch(addCurrentUser(user));
    });
  };

  const handleSignOut = () => {
    firebaseAppAuth.signOut();
  };

  return (
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
