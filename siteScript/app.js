//get element
const tEmail = document.getElementById('email');
const tPassword = document.getElementsByName('password');
const stEmail = document.getElementById('semail');
const stPassword = document.getElementsByName('spassword');
const bLogin = document.getElementById('login');
const bSignup = document.getElementById('signup');
const blogout = document.getElementById('logout');

// add login event
bLogin.addEventListener('click', e => {
    //get email and passwords
    const email = tEmail.value;
    const pass = tPassword.value;
    const auth = firebase.auth();

    // sign in
    var promise = auth().signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
});

bSignup.addEventListener('click', e => {
    //get email and password
    const email = stEmail.value;
    const pass = stPassword.value;
    const auth = firebase.auth();

    // sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
});

blogout.addEventListener('click', e => {
    firebase.auth().signOut();
});

firebase.Auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
        blogout.classList.remove('hide');
    } else {
        console.log('not logged in');
        blogout.classList.add('hide');
    }
});