import React, { useContext, useState } from "react";
import styled from "styled-components";

import { AppContext, firebaseAppAuth } from "./AppContext";

const SignIn = () => {
  const [user, setUser] = useState(null);
  const { signInWithGoogle } = useContext(AppContext);

  console.log(user);

  const handleSignIn = () => {
    signInWithGoogle();
    firebaseAppAuth.onAuthStateChanged((user) => {
      setUser(user);
    });
  };

  const handleSignOut = () => {
    firebaseAppAuth.signOut();
  };

  return (
    <>
      {user !== null ? (
        <div>
          <p>Welcome {user.displayName}</p>
          <UserAvatar src={user.photoURL} style={{}} />
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
