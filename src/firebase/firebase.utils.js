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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.error('Error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
