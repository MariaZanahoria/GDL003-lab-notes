import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyByzSVwnicauz13O9ix-rRu6Hr1qns08Lw",
    authDomain: "notes-2b586.firebaseapp.com",
    projectId: "notes-2b586",
})

let db = firebase.firestore();
db.settings({timestampsinSnapshots: true});

export default db