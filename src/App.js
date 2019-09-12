import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import "firebase/auth";
import {
  FirebaseAuthProvider,
} from "@react-firebase/auth";

import Login from './App2';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
        <FirebaseAuthConsumer>
        {({ isSignedIn}) => {
          return (
            isSignedIn ? null
            : <Login />
          )
     
        }}
      </FirebaseAuthConsumer>   
        </FirebaseAuthProvider>

      </header>
    </div>
  );
}

export default App;
