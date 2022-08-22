import { initializeApp }  from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from"firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyAgOnJ0qbvNaSJlvqHHnek2-WIB8TCXmBg",
    authDomain: "twitter-clone-f4426.firebaseapp.com",
    projectId: "twitter-clone-f4426",
    storageBucket: "twitter-clone-f4426.appspot.com",
    messagingSenderId: "158795731446",
    appId: "1:158795731446:web:741db5cef088f74fc437d7",
    measurementId: "G-4Q3237Z51C"
  };
  const firebaseApp =initializeApp(firebaseConfig);
  const db=getFirestore(firebaseApp);
  const auth=getAuth();
  const provider=new GoogleAuthProvider();
  export {auth,provider};
  export default db;