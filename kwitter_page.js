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
       console.log(firebase_message_id)
       console.log(message_data)
       names=message_data["name"]
       message=message_data["message"]
       like=message_data["like"]
       name_with_tag="<h4> "+names+"<img class='user_tick' src='tick.png'></h4>"
       message_with_tag="<h4 class='message_h4'>"+message+"</h4>"
       like_button="<button class='btn btn-warning' id= "+firebase_message_id+" value="+like+" onclick='updateLikes(this.id)'>"
       span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> Like: "+like+"</span></button><hr>"
       row=name_with_tag+message_with_tag+like_button+span_with_tag
       document.getElementById("output").innerHTML+=row
       
             } });  }); }
       getData();
       
       function logout(){
             window.location="index.html"
             localStorage.removeItem("user_name")
             localStorage.removeItem("room_name")
             }
       
       function updateLikes(message_id){
       console.log(message_id)
       button_id=message_id
       likes=document.getElementById(button_id).value 
       updated_likes=Number(likes)+1
       console.log(updated_likes)
       firebase.database().ref(room_name).child(message_id).update({
             like:updated_likes
       })
       }