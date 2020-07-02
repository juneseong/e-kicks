import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAmQyhL6jFasPi0f866mKX_elXsjJSTXq4",
    authDomain: "e-kicks.firebaseapp.com",
    databaseURL: "https://e-kicks.firebaseio.com",
    projectId: "e-kicks",
    storageBucket: "e-kicks.appspot.com",
    messagingSenderId: "269380767419",
    appId: "1:269380767419:web:568b905cffce306283a39e",
    measurementId: "G-34NEQDF82E"
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
                ...additionalData
            });
        } catch (error) {
            console.log(error.message);
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