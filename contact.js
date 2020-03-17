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
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var firestore = firebase.firestore();

// get data

const submitBtn = document.querySelector("#submit");

let userName = document.querySelector("#views_name");
let userEmail = document.querySelector("#views_email");
let userMessage = document.querySelector("#your_views");

const db = firestore.collection("contactUs");

submitBtn.addEventListener('click', function() {
    let userNameInput = userName.value;
    let userEmailInput = userEmail.value;
    let userMessageInput = userMessage.value;

    //access database collection

    db.doc()
        .set({
            name: userNameInput,
            email: userEmailInput,
            message: userMessageInput
        })
        .then(function() {
            console.log("data Saved");
        })
        .catch(function(error) {
            console.log(error);
        });
})