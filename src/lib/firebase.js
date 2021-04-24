  
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here I want to import the seed file
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyBsUi0_ArTOdrFMRjNWOqK7vUIwDto2mDM",
    authDomain: "instagram-26036.firebaseapp.com",
    projectId: "instagram-26036",
    storageBucket: "instagram-26036.appspot.com",
    messagingSenderId: "194327792125",
    appId: "1:194327792125:web:c57c86887979251a7ab194"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where I want to call the seed file (only ONCE!)
// seedDatabase(firebase);

console.log("firebase", firebase);

export { firebase, FieldValue };