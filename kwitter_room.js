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
     document.getElementById("user_name").innerHTML= " welcome " + user_name + "!";
//ADD YOUR FIREBASE LINKS HERE
function addroom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names=childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+ "onclick='redirecttoroomname(this.id)'>#"+ Room_names +"</div><hrs>"
      document.getElementById("output").innerHTML+=row; 
      //End code
      });});}
getData();

function redirecttoroomname(name)
{
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}