import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyC67bbQO0MzqnxFk1ACND802oxxghSXWQE",
    authDomain: "swifts-d9370.firebaseapp.com",
    projectId: "swifts-d9370",
    storageBucket: "swifts-d9370.appspot.com",
    messagingSenderId: "115148257454",
    appId: "1:115148257454:web:de504f94639218b869153f",
    measurementId: "G-PZ8DHK3HCC"
})

export const db=firebaseApp.firestore();
export const auth=firebase.auth();
export const storage=firebase.storage();