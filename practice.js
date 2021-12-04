
//ADD YOUR FIREBASE LINKS
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
  
function adduser()
{
add=document.getElementById("inp1").value;
firebase.database().ref("/").child(add).update({
purpose:"adding user" });
}