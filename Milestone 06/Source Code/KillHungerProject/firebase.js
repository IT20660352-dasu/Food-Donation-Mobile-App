// Import the functions you need from the SDKs you need
//import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDi4G2GeGG53D949w3J7uW4DNL83n7n5sc",
//   authDomain: "kill-hunger.firebaseapp.com",
//   projectId: "kill-hunger",
//   storageBucket: "kill-hunger.appspot.com",
//   messagingSenderId: "327347662172",
//   appId: "1:327347662172:web:ecb339436b705f7a736599"
// };

// Initialize Firebase
// import * as firebase from "firebase";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig ={
    apiKey: "AIzaSyDi4G2GeGG53D949w3J7uW4DNL83n7n5sc",
  authDomain: "kill-hunger.firebaseapp.com",
  projectId: "kill-hunger",
  storageBucket: "kill-hunger.appspot.com",
  messagingSenderId: "327347662172",
  appId: "1:327347662172:web:ecb339436b705f7a736599"
}

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);

}

export{firebase};