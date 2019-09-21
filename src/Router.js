import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import firebase from "firebase/app";
import CreateNotes from "./Home/CreateNotes";
import AllNotes from "./Home/Notes";
import fileUpload from "./Home/Pictures"

function AppRouter() {

    const user = firebase.auth().currentUser
        // firebase.auth(). currentUser.photoURL || currentUser.displayName;
        // <p> Hola, { user.displayName === "" || user.displayName == null ? " user" : user.displayName}</p >
        // < img src = { user.photoURL } alt = { user.displayName } ></img>


    const onLogoutClicked = () => {
        firebase.auth().signOut()
            .then(() => { console.log("log out has been successful") })
            .catch((error) => { console.log(error) })
    }

    return <center>
        <div>
            <button className="Button-Style" onClick={() => onLogoutClicked()}>Log out</button>
        </div>

        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Perfil</Link>
                        </li>
                        <li>
                            <Link to="/NuevaNota/">Crear Nota</Link>
                        </li>
                        <li>
                            <Link to="/Notas/">Notas</Link>
                        </li>
                    </ul>
                </nav>

                {/* <Route path="/" exact component={AllNotes} /> */}
                <Route path="/NuevaNota/" component={CreateNotes} />
                <Route path="/Notas/" component={fileUpload} />
            </div>
        </Router>
    </center>
}


export default AppRouter;