var firebaseConfig = {
    apiKey: "AIzaSyBaPD4rMqK2I1ghZOG9PIHlCtZzZWTyjCg",
    authDomain: "kwitter-a79be.firebaseapp.com",
    databaseURL: "https://kwitter-a79be-default-rtdb.firebaseio.com",
    projectId: "kwitter-a79be",
    storageBucket: "kwitter-a79be.appspot.com",
    messagingSenderId: "265717976528",
    appId: "1:265717976528:web:e6c6784f810b97b296fdd5"
  };
  
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")
function send(){
    msg=document.getElementById("msgTxt").value 
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    })
    document.getElementById("msgTxt").value=""
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout(){
    window.location="index.html"
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    }