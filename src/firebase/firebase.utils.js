import firebase from "firebase/app";

import 'firebase/firestore';

import 'firebase/auth';

const config =
    {
        apiKey: "AIzaSyCUrhvuo8dLNslrFVazTj9GC0vYibsG8To",
        authDomain: "crwn-clothing-2de3c.firebaseapp.com",
        databaseURL: "https://crwn-clothing-2de3c.firebaseio.com",
        projectId: "crwn-clothing-2de3c",
        storageBucket: "crwn-clothing-2de3c.appspot.com",
        messagingSenderId: "698182154025",
        appId: "1:698182154025:web:94fa51c20be2ad2022e938",
        measurementId: "G-HVXKFH4KLG"
    };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData

            })
        } catch (e) {
            console.log('error creating a user profile', e.message);

        }
    }
    return userRef;


};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;