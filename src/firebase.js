import firebase from "firebase";

const firebaseApp =firebase.initializeApp({
  apiKey: "AIzaSyDUCFbePeoMQiFT3bhj0n0uCyPhZZBcp8Q",
  authDomain: "fir-52e66.firebaseapp.com",
  projectId: "fir-52e66",
  storageBucket: "fir-52e66.appspot.com",
  messagingSenderId: "281804664164",
  appId: "1:281804664164:web:491e6b4e5569052d579e71",
  measurementId: "G-LYWTYD2JDL"
});


const auth=firebase.auth();


export { auth};


