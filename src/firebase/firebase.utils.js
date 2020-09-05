import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyAkQFjsYfFbJ39h8bGnhwywI-wP9PNLTGA',
    authDomain: 'react-e-commerce-b4d7d.firebaseapp.com',
    databaseURL: 'https://react-e-commerce-b4d7d.firebaseio.com',
    projectId: 'react-e-commerce-b4d7d',
    storageBucket: 'react-e-commerce-b4d7d.appspot.com',
    messagingSenderId: '1041294983066',
    appId: '1:1041294983066:web:3ac4c5348e76b347b24423',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
