import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../FirebaseConfig';
import './LoginForm.css';
import AppRouter from '../Router';

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
                        ? <p className="LoginForm-header">Hola, {user.displayName === "" || user.displayName == null ? " user" : user.displayName}</p>
                        : <p className="LoginForm-header">Bienvenid@ a 7notes <br></br> Por favor inicia sesion</p>
                }
                {
                    user
                        ? <button className="Button-Style" onClick={signOut}>Sign out</button>
                        : <button onClick={signInWithGoogle}>Continuar con Google</button>

                }
                {
                    user

                        ? <AppRouter/>
                        : <button onClick={signInWithFacebook}>Continuar con Facebook</button>
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



export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);