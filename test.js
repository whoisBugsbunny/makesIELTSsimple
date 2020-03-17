firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        // document.getElementById("login_div").style.visibility = "hidden";
        document.getElementById("login_div").classList.add('hide');
        document.getElementById("user_div").classList.remove('hide');
        var user = firebase.auth().currentUser;

        if (user != null) {
            // var id_name = user.displayName;
            var email_id = user.email;
            var email_verified = user.emailVerified;
            var email_verified_val = "";

            if (email_verified) {
                email_verified_val = "account is varified";
                document.getElementById("verification").style.display = "none";
            } else {
                email_verified_val = "account is not varified";
            }
            // document.getElementById("user_name").innerHTML = "hi there : " + id_name;
            document.getElementById("user_email").innerHTML = "hi there : " + email_id + "<br> verified : " + email_verified_val;
            document.getElementById("acc_name").innerHTML = "hi there : " + email_id;

        }
    } else {
        // No user is signed in.
        document.getElementById("user_div").classList.add('hide');
        document.getElementById("login_div").classList.remove('hide');


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
    var userEmail = document.getElementById("email").value;
    var userPass = document.getElementById("password").value;
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