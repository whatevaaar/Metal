const CORREOS_ADMIN = ["cecilia.garza@extrategia.com", "emiliano.hidalgo@extrategia.com"];

var firebaseConfig = {
    apiKey: "AIzaSyCFCRmEdAIm_eg4a_rH7d7-ZcqGgNOoGpQ",
    authDomain: "metal-6af91.firebaseapp.com",
    databaseURL: "https://metal-6af91.firebaseio.com",
    projectId: "metal-6af91",
    storageBucket: "metal-6af91.appspot.com",
    messagingSenderId: "359979741876",
    appId: "1:359979741876:web:d850d12244b41f17325de1",
    measurementId: "G-VZK79H2X0Z"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let user = null;
firebase.auth().onAuthStateChanged(function (userL) {
    if (userL) {
        user = userL;
        actualizarPantallaLoggedInWeb();
        actualizarPantallaLoggedInMobile();
    }
});

function actualizarPantallaLoggedInWeb() {
    let linkPublicar = document.getElementById("a-publicar-trabajo");
    let liSignIn = document.getElementById("li-sign-in");
    let liLogin = document.getElementById("li-login");
    let liSignOut = document.getElementById("li-sign-out");
    let liMiCV = document.getElementById("li-mi-cv");
    let liCandidatos = document.getElementById("li-candidatos");
    liSignIn.hidden = true;
    liLogin.hidden = true;
    liSignOut.hidden = false;
    linkPublicar.hidden = !esAdmin();
    liMiCV.hidden = esAdmin();
    liCandidatos.hidden = !esAdmin();
}

function actualizarPantallaLoggedInMobile() {
    let linkPublicar = document.getElementById("mobile-a-publicar-trabajo");
    let liSignIn = document.getElementById("mobile-li-sign-in");
    let liLogin = document.getElementById("mobile-li-login");
    let liSignOut = document.getElementById("mobile-li-sign-out");
    let liMiCV = document.getElementById("mobile-li-mi-cv");
    let liCandidatos = document.getElementById("mobile-li-candidatos");
    liSignIn.hidden = true;
    liLogin.hidden = true;
    liSignOut.hidden = false;
    linkPublicar.hidden = !esAdmin();
    liMiCV.hidden = esAdmin();
    liCandidatos.hidden = !esAdmin();
}

function esAdmin() {
    return CORREOS_ADMIN.indexOf(user.email) >= 0;
}

function crearCuenta() {
    let email = document.getElementById("input-email").value;
    let password = document.getElementById("input-password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = "perfil.html"
        })
        .catch((error) => {
            alert(error);
        });
}

function crearCuentaAdministrador() {
    let email = document.getElementById("input-email").value;
    let password = document.getElementById("input-password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            subirDatosAdmin();
        })
        .catch((error) => {
            alert(error);
        });
}

function subirDatosAdmin() {
    let userAdmin = firebase.auth().currentUser;
    let ref = firebase.database().ref('administradores/' + userAdmin.uid);
    let nombre = document.getElementById("input-nombre").value;
    let email = document.getElementById("input-email").value;
    ref.set({
        nombre: nombre,
        email: email
    }, (error) => {
        if (error)
            alert(error);
        else
            window.location.href = "index.html";
    });
}

function comprobarUsuarioEstaLogeado() {
    if (!user)
        window.location.href = "signup.html";
}

function signInConCorreo() {
    let email = document.getElementById("sigin-form-username").value;
    let password = document.getElementById("sigin-form-password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userL) => {
            user = userL;
            actualizarPantallaLoggedIn();
        })
        .catch((error) => {
            alert(error);
            console.log("woops");
        });
}

function signOut() {
    firebase.auth().signOut().then(function () {
        window.location.href = "signup.html";
    });
}

