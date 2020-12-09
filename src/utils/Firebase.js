import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD7bTHrnC4U-4AIQLoJ05aP2wjZ-PSZqJ8',
  authDomain: 'ecomerce-clothing.firebaseapp.com',
  projectId: 'ecomerce-clothing',
  storageBucket: 'ecomerce-clothing.appspot.com',
  messagingSenderId: '646260699140',
  appId: '1:646260699140:web:28724c15ff2b3208a98551',
  measurementId: 'G-VJSQVMY42Q',
};

// Initialize Firebase
firebase.initializeApp(config);
// firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (
  userAuthData,
  additionalData
) => {
  if (!userAuthData) return;

  const userRef = firestore.doc(`/users/${userAuthData.uid}`);
  const snapShotRef = await userRef.get();

  if (!snapShotRef.exists) {
    try {
      const { displayName, email } = userAuthData;

      const createdAt = new Date();

      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error while creating a user: ', error);
    }
  }

  return userRef;
};

export default firebase;
