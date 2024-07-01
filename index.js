 import firebase from "firebase/app";

 const firebaseConfig = {
    apiKey: "AIzaSyCBJuNF1NtcQkwjdcqwKdB3M654-2nnxGc",
    authDomain: "rico-fb96d.firebaseapp.com",
    databaseURL: "https://rico-fb96d-default-rtdb.firebaseio.com/",
    projectId: "rico-fb96d",
    storageBucket: "rico-fb96d.appspot.com",
    messagingSenderId: "914342864676",
    appId: "1:914342864676:web:aa3029bf5a22209d9035b1",
    measurementId: "G-DNREG5TCQL"
  };

firebase.initializeApp(firebaseConfig);

const dbRef = firebase.database().ref();
dbRef.child("Menu Semanal").once('value').then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
