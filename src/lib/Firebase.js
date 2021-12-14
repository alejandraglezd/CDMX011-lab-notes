
const firebaseConfig = {
    apiKey: "AIzaSyCjaZXxVUbBQcMqDO-XbqqW9FYemzhkRAM",
    authDomain: "labnotes-friendly-remind-26ae4.firebaseapp.com",
    projectId: "labnotes-friendly-remind-26ae4",
    storageBucket: "labnotes-friendly-remind-26ae4.appspot.com",
    messagingSenderId: "75231156368",
    appId: "1:75231156368:web:1f7a51ccf278349f92a015"
  };


firebase.initializeApp(firebaseConfig);

export default firebase;

export const db = firebase.firestore();