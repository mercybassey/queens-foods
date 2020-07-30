import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyClfErxOB_igyJ8OdhqAa_SSJSmmUXKV9w",
    authDomain: "pizza-db-ac75c.firebaseapp.com",
    databaseURL: "https://pizza-db-ac75c.firebaseio.com",
    projectId: "pizza-db-ac75c",
    storageBucket: "pizza-db-ac75c.appspot.com",
    messagingSenderId: "10997081594",
    appId: "1:10997081594:web:84a09d09b8a7a834237043"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firetore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;