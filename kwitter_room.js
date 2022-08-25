
var firebaseConfig = {
      apiKey: "AIzaSyDI-f-Ps3i9KE1ZS2IUTMAvIdWMUtDIlFo",
      authDomain: "babalonianchristmas.firebaseapp.com",
      databaseURL: "https://babalonianchristmas-default-rtdb.firebaseio.com",
      projectId: "babalonianchristmas",
      storageBucket: "babalonianchristmas.appspot.com",
      messagingSenderId: "465258206745",
      appId: "1:465258206745:web:ccdf2b7cb07287a8a43c88"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "welcome " + user_name + " !";

function addroom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose:"adding room"});     
    localStorage.setItem ("room_name", room_name);
    window.location = "Wheresap_Chatss.html";
}
     
function getData() {
      firebase.database().ref("/").on('value',
          function(snapshot) {document.getElementById("output").innerHTML = "";
          snapshot.forEach(
                function(childSnapshot) {
                      childKey  = childSnapshot.key; 
                      Room_names = childKey;
                      console.log("room")
                      row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomname(this.id)'> #"+ Room_names +"  </div> <hr>"      
                      document.getElementById("output").innerHTML += row;
                  });
            });
}

getData();

function redirectToRoom(name){
      window.location = "wheresap_page.html";
      console.log(name);
      localStorage.setItem("room_name");
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html" 
}