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
firebase.auth().onAuthStateChanged(function(userL) {
    if (userL) {
        user = userL;
    } else {

    }
});
function crearCuenta() {
    let email = document.getElementById("input-email").value;
    let password = document.getElementById("input-password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            window.location.href = "perfil.html"
        })
        .catch((error) => {
            alert(error);
        });
}

function comprobarUsuarioEstaLogeado(){
    if (!user)
        window.location.href = "signup.html";
}

