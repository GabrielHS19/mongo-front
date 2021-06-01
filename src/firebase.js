//import firebase from 'firebase/app'
import 'firebase/storage'
import firebase from 'firebase/app'

import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCYPsVqbV0ekZ2ockoErxT4YoVWG-aPL5U",
    authDomain: "react-gabhs196.firebaseapp.com",
    databaseURL: "https://react-gabhs196-default-rtdb.firebaseio.com",
    projectId: "react-gabhs196",
    storageBucket: "react-gabhs196.appspot.com",
    messagingSenderId: "812353467705",
    appId: "1:812353467705:web:866a8a0e8790ef8ceb24e8",
    measurementId: "G-H2TG89R89R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const storage = firebase.storage()

//export default firebase.firestore();
var firebase1 = firebase.firestore();

export  {
    storage, firebase1 as default
}