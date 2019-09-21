import React, { Component } from 'react';
import firebase from '../FirebaseConfig';

export default class NewNotes extends Component {
const note = firebase.db.collection('post');

let textPost = document.querySelector(".textPost");
let indications = document.querySelector(".indications");
let zone = document.getElementById("selectZone").value;
let statusPost = document.getElementById("status").value;
let day = new Date().toLocaleDateString();
let hour = new Date().toLocaleTimeString();
let dates = " ";
dates = day + " " + hour;
let saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener('click', () => {

    post.add({
        email: getUserEmail(),
        name: getUserName(),
        profilePicUrl: getProfilePicUrl(),
        status: statusPost,
        text: textPost.value + " " + indications.value,
        zone: zone,
        date: dates,        
        likes: "0"
    }).then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
    }).catch(function (error) {
        console.error("Error adding document: ", error);
    });
});
});

function getUserName() {
    return firebase.auth().currentUser.displayName;
}
function getProfilePicUrl() {
    return firebase.auth().currentUser.photoURL || '/images/profile_placeholder.png';
}
function getUserEmail() {
    return firebase.auth().currentUser.email;
}