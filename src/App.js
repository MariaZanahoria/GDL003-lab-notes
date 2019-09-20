import React from 'react';
import './App.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./FirebaseConfig";
import { FirebaseAuthProvider, FirebaseAuthConsumer } from "@react-firebase/auth";
import LoginView from './LoginForm/Login';
import AppRouter from './Router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button className="App-logo" />
        <p className="App-logocomplete" />
        <div>
          <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
            {

            }
            <FirebaseAuthConsumer>
              {({ isSignedIn }) => {

                return isSignedIn
                  ? <AppRouter />
                  : <LoginView />
              }}
            </FirebaseAuthConsumer>
          </FirebaseAuthProvider>
        </div>
      </header>
    </div>
  );
}


export default App;