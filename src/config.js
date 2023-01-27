import firebase from 'firebase/app'
import firestore from 'firebase/firestore'
import "firebase/auth"

const settings = {timestampsInSnapshots: true};

const config = {
    // apiKey: " ",
    // authDomain: " ",
    // databaseURL: " ",
    // projectId: " ",
    // storageBucket: " ",
    // messagingSenderId: " ",
    // appId: " "
    apiKey: "AIzaSyCxF3Aen5ut6m9KR9Q_z4nSwayJJLnwlQk",
    authDomain: "doctor-project-38365.firebaseapp.com",
    databaseURL: "https://doctor-project-38365-default-rtdb.firebaseio.com",
    projectId: "doctor-project-38365",
    storageBucket: "doctor-project-38365.appspot.com",
    messagingSenderId: "18994916563",
    appId: "1:18994916563:web:bc58049ed4b32e0d757826"
};
firebase.initializeApp(config);

export const auth = firebase.auth() 
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const DB = firebase.firestore();
