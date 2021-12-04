//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDkp3uZASi3pakRvrPz_VNQsJAN3Mbq6wA",
      authDomain: "my-kwitter-aa4bb.firebaseapp.com",
      databaseURL: "https://my-kwitter-aa4bb-default-rtdb.firebaseio.com",
      projectId: "my-kwitter-aa4bb",
      storageBucket: "my-kwitter-aa4bb.appspot.com",
      messagingSenderId: "707026423326",
      appId: "1:707026423326:web:4715241737814c1f37680f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send()
{
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0      
});
document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+ "value="+like+"onclick='updatelike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = name_tag + message_tag +like_button + span_with_tag; document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function updatelike(message_id)
{
console.log("clicked on like button - " + message_id); button_id = message_id; likes = document.getElementById(button_id).value; 
updated_likes = Number(likes) + 1; console.log(updated_likes); 
firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });
}
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}