import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB2w_tndBRc9BrcAqYdxj-BEtJkealO55g",
  authDomain: "bidencrypto-e3d6a.firebaseapp.com",
  projectId: "bidencrypto-e3d6a",
  storageBucket: "bidencrypto-e3d6a.appspot.com",
  messagingSenderId: "164928597073",
  appId: "1:164928597073:web:a6c1f27e6ef75aea705c70",
  measurementId: "G-KP1KDBW659"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const auth = firebase.auth();

export { auth }
export default firebase;
