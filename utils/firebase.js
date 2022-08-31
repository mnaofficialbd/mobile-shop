import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD6iAlJcZLsjxy7U4giSKYx63lIyFguGCE",
    authDomain: "nextjs-mobile-shop.firebaseapp.com",
    projectId: "nextjs-mobile-shop",
    storageBucket: "nextjs-mobile-shop.appspot.com",
    messagingSenderId: "819326982695",
    appId: "1:819326982695:web:198d6c86006a0d6a720c02"
  };

  if(!firebase.app.length){
      firebase.initializeApp(firebaseConfig);
    }
    export default firebase;