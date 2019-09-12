import React, { Component } from 'react';
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import firebase from "firebase/app";

export default class LoginView extends Component {
  onGoogleSignInClicked = () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(() => { console.log("google singin was successful") })
      .catch((error) => { console.log(error) });
  }
  onFacebookSignInClicked = () => {
    const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(facebookAuthProvider)
      .then(() => { console.log("Facebook singin was successful") })
      .catch((error) => { console.log(error) });
  }
  onLogoutClicked = () => {
    firebase.auth().signOut()
      .then(() => {
        console.log("log out has been successful")
      }).catch((error) => {
        console.log(error)
      })
  }

  onRegister = () =>{
    firebase.auth().signInWithEmailAndPassword
  }

  render() {

    return <center>
      <div>
        <button onClick={() => this.onGoogleSignInClicked()}>Sign in with google</button>
      </div>
      <div>
        <button onClick={() => this.onFacebookSignInClicked()}>Sign in with Facebook</button>
      </div>
      <div>
        <button onClick={() => this.onLogoutClicked()}>Log out</button>
      </div>

      <form onSubmit={this.onRegister}>
        <input
          required placeholder="user@email.com"
          type='email' />
        <input
          required placeholder="password"
          type='password' />
        <buttom type="submit"></buttom>
      </form>

      <FirebaseAuthConsumer>
        {({ isSignedIn, user, providerId }) => {
          console.log(isSignedIn)
          console.log(user)
          console.log(providerId)
        }}
      </FirebaseAuthConsumer>
    </center>
  }
}
