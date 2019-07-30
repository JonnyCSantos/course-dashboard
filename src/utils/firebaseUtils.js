import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC2dzZ4Qs0lRflIzeFsbssevqYTD6uzIto",
    authDomain: "meu-app-439bc.firebaseapp.com",
    databaseURL: "https://meu-app-439bc.firebaseio.com",
    projectId: "meu-app-439bc",
    storageBucket: "meu-app-439bc.appspot.com",
    messagingSenderId: "47067776382",
    appId: "1:47067776382:web:aa0b5854eff83800"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();