var firebaseConfig = {
      apiKey: "AIzaSyD6VoF_7uE6syVySNiZD_qvmuAviCOVdbg",
      authDomain: "kwitter-7396b.firebaseapp.com",
      databaseURL: "https://kwitter-7396b-default-rtdb.firebaseio.com",
      projectId: "kwitter-7396b",
      storageBucket: "kwitter-7396b.appspot.com",
      messagingSenderId: "910505216813",
      appId: "1:910505216813:web:669d861d17593ddf47e1a4",
      measurementId: "G-4TF3066EV4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
