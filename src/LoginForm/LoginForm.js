import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
import './LoginForm.css';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
    render() {
        // const LoginForm = (props) => {
        const { user, signOut, signInWithGoogle, signInWithFacebook } = this.props;

        const onLoginWithEmailClicked = (email, password) => {
            firebaseAppAuth.signInWithEmailAndPassword(email, password).then(() => {
                console.log("success");
            }).catch((error) => {
                firebaseAppAuth.createUserWithEmailAndPassword(email, password).then(() => {
                    console.log(`user has been created successfully with email ${email}`);
                }).catch(() => {
                    console.log(error.message);
                })
            })
        }

        let email = "";
        let password = "";

        return (
            <div className="App">
                {
                    user
                        ? <p className="LoginForm-header">Hello, {user.displayName === "" || user.displayName == null ? " user" : user.displayName}</p>
                        : <p className="LoginForm-header">Welcome to 7notes <br></br> Please sign in.</p>
                }
                {
                    user
                        ? <button style={styles.buttonStyle} onClick={signOut}>Sign out</button>
                        : <button onClick={signInWithGoogle}>Sign in with Google</button> 

                }
                {
                    user
                        ? <button style={styles.buttonStyle} onClick={signOut}>Sign out</button>
                        : <button onClick={signInWithFacebook}>Sign in with Facebook</button>
                }
                {
                    user
                        ? <div>
                        </div>
                        : <div className="LoginFormContainer">
                            <input
                                onChange={(event) => { email = event.target.value }}
                                placeholder="Email"
                                type='email'
                            />
                            <input
                                onChange={(event) => { password = event.target.value }}
                                placeholder="Password"
                                type='password'
                            />
                            <button onClick={() => onLoginWithEmailClicked(email, password)}>Login with email</button>
                        </div>
                }
            </div>
        );
    }
}

const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
    facebookProvider: new firebase.auth.FacebookAuthProvider(),
};

const styles = {
    buttonStyle: {
        backgroundColor: "red",
        color: "white",
        padding: 10,
        margin: 8,
        width: 100,
        height: 32

    }
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);