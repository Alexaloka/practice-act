
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBPpP6RMBYcSnynavADYd4dOn63_SnfEPc",
    authDomain: "kwitter-9cf6c.firebaseapp.com",
    databaseURL: "https://kwitter-9cf6c-default-rtdb.firebaseio.com",
    projectId: "kwitter-9cf6c",
    storageBucket: "kwitter-9cf6c.appspot.com",
    messagingSenderId: "325700214679",
    appId: "1:325700214679:web:0827992aa4a0c81e646ed2"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser()
  {
    user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
purpose :"adding user"
});

  }