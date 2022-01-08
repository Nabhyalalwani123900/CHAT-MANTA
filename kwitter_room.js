const firebaseConfig = {
      apiKey: "AIzaSyBaPD4rMqK2I1ghZOG9PIHlCtZzZWTyjCg",
      authDomain: "kwitter-a79be.firebaseapp.com",
      databaseURL: "https://kwitter-a79be-default-rtdb.firebaseio.com",
      projectId: "kwitter-a79be",
      storageBucket: "kwitter-a79be.appspot.com",
      messagingSenderId: "265717976528",
      appId: "1:265717976528:web:e6c6784f810b97b296fdd5"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout(){

}

function addRoom(){

}