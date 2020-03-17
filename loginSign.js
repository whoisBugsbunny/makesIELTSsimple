 // Your web app's Firebase configuration
 var firebaseConfig = {
     apiKey: "AIzaSyA4ewdRSizGw6ZRaKpQr-NwDpbSIb5w6Xk",
     authDomain: "makes-ielts-simple.firebaseapp.com",
     databaseURL: "https://makes-ielts-simple.firebaseio.com",
     projectId: "makes-ielts-simple",
     storageBucket: "makes-ielts-simple.appspot.com",
     messagingSenderId: "596103193609",
     appId: "1:596103193609:web:c908b48735aeed5e2544d8",
     measurementId: "G-R022PY7L61"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();

 firebase.auth().onAuthStateChanged(function(user) {
     if (user) {
         // User is signed in.

         window.open("index.html", "_self");

         document.getElementById("loginbut").classList.add('hide');
         document.getElementById("logoutbut").classList.remove('hide');

         var user = firebase.auth().currentUser;

         if (user != null) {
             // var id_name = user.displayName;
             var email_id = user.email;
             var email_verified = user.emailVerified;

             if (email_verified) {
                 email_verified_val = "account is varified";
                 document.getElementById("verification").style.display = "none";
             } else {
                 email_verified_val = "account is not varified";
             }
             // document.getElementById("user_name").innerHTML = "hi there : " + id_name;
             document.getElementById("user_email").innerHTML = "hi there : " + email_id + "<br> verified : " + email_verified;

         }
     } else {
         // No user is signed in.
     }
 });

 function login() {
     var userEmail = document.getElementById("email").value;
     var userPass = document.getElementById("password").value;
     firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         // ...
         window.alert(errorMessage);
     });
 }

 function signup() {
     // var userName = document.getElementById("name").value;
     var userEmail = document.getElementById("semail").value;
     var userPass = document.getElementById("spassword").value;
     firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         // ...
         window.alert("error occur : " + errorMessage);
     });
 }

 function verification() {
     var user = firebase.auth().currentUser;

     user.sendEmailVerification().then(function() {
         // Email sent.
         window.alert("verification email is sent");
     }).catch(function(error) {
         // An error happened.
         window.alert("error : " + error.message);
     });
 }

 function logout() {
     firebase.auth().signOut();
 }