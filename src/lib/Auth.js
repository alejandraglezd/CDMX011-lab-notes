import firebase from 
//Registro de usuarios
firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

//Inicio de sesión
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

//Inicio de sesión con google
export const googleAuth = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const authGoogle = firebase.auth();
    authGoogle
      .signInWithPopup(provider)
      .then(() => {
        onNavigate('/wall');
      }).catch((error) => {
        console.log(error.message);
      });
  };
