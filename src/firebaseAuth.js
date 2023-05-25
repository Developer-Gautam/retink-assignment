
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDMHPyZRUd8nHBD-Sra0LMg4TIYPGESiso",
  authDomain: "retink-77298.firebaseapp.com",
  projectId: "retink-77298",
  storageBucket: "retink-77298.appspot.com",
  messagingSenderId: "300139057963",
  appId: "1:300139057963:web:c7fb55e7599d1a4a01eb6e",
  measurementId: "G-ZG74P0MYEL"
};


firebase.initializeApp(firebaseConfig);



export const auth = firebase.auth();

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
};

export const signOut = () => {
  return auth.signOut();
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};
