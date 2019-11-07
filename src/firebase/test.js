import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("CaHKhRjAwJkQqOtIsMqK")
  .collection("cartItems")
  .doc("Sdts6clZVJuRTz3UjOa8");
//We query those documents we've created in our Firebase's DB. Go into users and find in this document and from here we can access to an especific item we want
//We can also say:
firestore.doc("/users/CaHKhRjAwJkQqOtIsMqK/cartItems/Sdts6clZVJuRTz3UjOa8");
