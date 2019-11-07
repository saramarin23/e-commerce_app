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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  //Si no está logueado, we dont't want to do anything else

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  //With this we'll figure it out if there's data there
  //console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      // console.log("error creating user", error.message);
    }
  }

  return userRef;
};
//Va a ser asìncrono porque hace una petición API

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); //La autenticación de Google
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
//Hay muchos tipos de popups

export default firebase;
