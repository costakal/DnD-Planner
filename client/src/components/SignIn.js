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
    <>
      {user.currentUser !== null ? (
        <div>
          <p>Welcome {user.currentUser.displayName}</p>
          <UserAvatar src={user.currentUser.photoURL} style={{}} />
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <button onClick={handleSignIn}>Sign In</button>
        </div>
      )}
    </>
  );
};

export default SignIn;

const UserAvatar = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 25px;
`;
