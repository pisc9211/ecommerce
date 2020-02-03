import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAMkvOf3fsDSTGuJRpFdy7MUPPPKyt8s7w",
  authDomain: "ecommerce-71ff1.firebaseapp.com",
  databaseURL: "https://ecommerce-71ff1.firebaseio.com",
  projectId: "ecommerce-71ff1",
  storageBucket: "ecommerce-71ff1.appspot.com",
  messagingSenderId: "149828050019",
  appId: "1:149828050019:web:a122b8bc669e61c0526c56",
  measurementId: "G-LMK9CF9H4J"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;