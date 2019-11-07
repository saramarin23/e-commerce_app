import firebase from "firebase/app";
//Firebase tiene todas las librerías de utilidades
import "firebase/firestore"; //Para la base de datos
import "firebase/auth"; //Para la autenticación

const config = {
  apiKey: "AIzaSyCFZIEObIFaOK2C9x3riRtZkOK1u4F8vdM",
  authDomain: "crwn-db-a37b8.firebaseapp.com",
  databaseURL: "https://crwn-db-a37b8.firebaseio.com",
  projectId: "crwn-db-a37b8",
  storageBucket: "crwn-db-a37b8.appspot.com",
  messagingSenderId: "142915756608",
  appId: "1:142915756608:web:eaa1d369be5c1193b075a5",
  measurementId: "G-0S8XD31606"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); //La autenticación de Google
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
//Hay muchos tipos de popups

export default firebase;
