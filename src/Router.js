import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import firebase from "firebase/app";
import CreateNotes from "./Home/CreateNotes";
// import AllNotes from "./Home/Notes";


function AppRouter() {

  const  onLogoutClicked = () => {
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
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about/">About</Link>
                        </li>
                        <li>
                            <Link to="/users/">Users</Link>
                        </li>
                    </ul>
                </nav>

                {/* <Route path="/" exact component={AllNotes} /> */}
                <Route path="/about/" component={CreateNotes} />
                {/* <Route path="/users/" component={Users} /> */}
            </div>
        </Router>
    </center>
}


export default AppRouter;