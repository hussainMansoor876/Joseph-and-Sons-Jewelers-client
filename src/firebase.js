import * as firebase from 'firebase';



// Initialize Firebase
const config = {
    apiKey: "AIzaSyBi0xDZ_alBWpMoeXQjnngXb3d3T4-chj0",
    authDomain: "pixel-inventory.firebaseapp.com",
    databaseURL: "https://pixel-inventory.firebaseio.com",
    projectId: "pixel-inventory",
    storageBucket: "pixel-inventory.appspot.com",
    messagingSenderId: "636968312763",
    appId: "1:636968312763:web:4b52d960aae3da3bd4ae9e"
  };
firebase.initializeApp(config);

export default firebase;