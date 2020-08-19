import React, { useContext, useState } from "react";
import styled from "styled-components";

import { AppContext, firebaseAppAuth } from "./AppContext";

const App = () => {
  const [user, setUser] = useState(null);
  const { signInWithGoogle } = useContext(AppContext);

  const handleSignIn = () => {
    const result = signInWithGoogle();
    console.log(result);
    firebaseAppAuth.onAuthStateChanged((user) => {
      console.log(user);
      setUser(user);
    });
  };

  const handleSignOut = () => {
    const result = firebaseAppAuth.signOut();
    console.log(result);
  };

  return (
    <StyledPageWrapper>
      <StyledHeader>
        <button onClick={handleSignIn}>Sign In</button>
      </StyledHeader>
      <div>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
      <StyledContainer></StyledContainer>
    </StyledPageWrapper>
  );
};

const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.nav`
  background: #eaeaea;
  padding: 6px 14px;
  min-height: 48px;
`;

const StyledUserContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`;

const StyledContainer = styled.div`
  background: #fafafa;
  min-height: 400px;
  padding: 14px;
`;

export default App;
