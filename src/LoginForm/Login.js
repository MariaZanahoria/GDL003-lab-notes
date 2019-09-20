import React, { Component } from 'react';
import firebase from "firebase/app";

export default class LoginView extends Component {
    email = "";
    password = "";

    onGoogleSignInClicked = () => {
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(() => { console.log("google singin was successful") })
            .catch((error) => { console.log(error) });
    }

    onFacebookSignInClicked = () => {
        const facebookProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithRedirect(facebookProvider)
            .then(() => { console.log("facebook was successful") })
            .catch((error) => { console.log(error) });
    }

    onRegister = () => {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(() => { console.log("login successful") })
            .catch((error) => {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .then(() => console.log("register has been successful"))
                    .catch((error) => console.log(error))
            })
    }

    render() {
        return <center>
            <div>
                <button onClick={() => this.onGoogleSignInClicked()}>Sign in with google</button>
            </div>
            <div>
                <button onClick={() => this.onFacebookSignInClicked()}>Sign in with facebook</button>
            </div>
            

            <div>
                <input
                    placeholder="user@email.com"
                    onChange={(event) => { this.email = (event.target.value) }}
                    type='email' />
                <input
                    onChange={(event) => { this.password = (event.target.value) }}
                    type='password' />
                <button
                    onClick={() => this.onRegister()}>
                    Register
                 </button>
            </div>
        </center >
    }
}