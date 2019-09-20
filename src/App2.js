import React from 'react';
//import logo from "../Images/logoblack";
import './App.css';
// import firebase from "firebase/app";
// import firebaseConfig from "./FirebaseConfig";
import "firebase/auth";
// import {
//   FirebaseAuthProvider, FirebaseAuthConsumer
// } from "@react-firebase/auth";
import Login from './LoginForm/LoginForm';



function App2() {
  return (
    <div className="App">
      <header className="App-header">
        <button className="App-logo" />
        <p className="App-logocomplete" />
        <div>
          <Login />
        </div>
      </header>
    </div>
  );
}

export default App;