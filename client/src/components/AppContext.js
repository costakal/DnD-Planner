import React, { createContext } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase";
import "firebase/auth";

export const AppContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyAJVxnc1eaHWwY0qZl7cHD7q_NLQL5lk8U",
  authDomain: "dnd5e-planner.firebaseapp.com",
  databaseURL: "https://dnd5e-planner.firebaseio.com",
  projectId: "dnd5e-planner",
  storageBucket: "dnd5e-planner.appspot.com",
  messagingSenderId: "369582500688",
  appId: "1:369582500688:web:d0b9d7723f40afe566da55",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const AppProvider = ({ children, signInWithGoogle }) => {
  return (
    <AppContext.Provider value={{ signInWithGoogle }}>
      {children}
    </AppContext.Provider>
  );
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(AppProvider);