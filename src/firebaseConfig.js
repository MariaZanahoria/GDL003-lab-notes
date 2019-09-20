import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyByzSVwnicauz13O9ix-rRu6Hr1qns08Lw",
  authDomain: "notes-2b586.firebaseapp.com",
  databaseURL: "https://notes-2b586.firebaseio.com",
  projectId: "notes-2b586",
  storageBucket: "notes-2b586.appspot.com",
  messagingSenderId: "1075499928020",
  appId: "1:1075499928020:web:cfa98f707c24a041992e41"
};

const fire = firebase.initializeApp (config);
const db = firebase.firestore (fire);

export default {fire,db};