User_name = localStorage.getItem("User_name");
document.getElementById("user_name").innerHTML = "Welcome " + User_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name- " + Room_names);
row  = "<div class = 'Room_name' id = "+ Room_names +" onclick = 'redirectToRoomName(this.id)' >#" +Room_names+"</div><hr>"
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("Room_name" , name);
window.location = "kwitter_page.html";
}

function AddRoom() {
      room_names = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_names).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name" , room_names);
      window.location = "kwitter_page.html"
}