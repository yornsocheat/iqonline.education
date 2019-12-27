if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');

const firebaseConfig = {
    apiKey: "AIzaSyCNFaqQFtzAkZt52FSfzyZuLj1_8WeEwB4",
    authDomain: "iqonline-ca325.firebaseapp.com",
    databaseURL: "https://iqonline-ca325.firebaseio.com",
    projectId: "iqonline-ca325",
    storageBucket: "iqonline-ca325.appspot.com",
    messagingSenderId: "438949231065",
    appId: "1:438949231065:web:b626619a845e30e80281c8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
