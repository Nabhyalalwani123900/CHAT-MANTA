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
document.getElementById("user_name").innerHTML="Welcome, "+ user_name
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
console.log("room_name "+Room_names)
row="<div class='room_name' id= "+Room_names+ " onclick='redirectToRoomName(this.id)'>#" +Room_names+"</div> <hr>"
      document.getElementById("output").innerHTML+=row
      });});}
getData();
function redirectToRoomName(name){
console.log(name)
localStorage.setItem("room_name",name)
window.location="kwitter_page.html"
}
function logout(){
window.location="index.html"
}

function addRoom(){
room_name=document.getElementById("room_name").value 
firebase.database().ref("/").child(room_name).update({
      purpose:"add chat room"

}) 
localStorage.setItem("room_name",room_name)
window.location="kwitter_page.html"
}