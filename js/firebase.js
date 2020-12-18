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

function guardarPerfil() {
    if (!user)
        window.location.href = "signup.html";
    let nombre = document.getElementById("input-nombre").value;
    let email = document.getElementById("input-email").value;
    let numeroTelefonico = document.getElementById("input-numero-telefonico").value;
    let facebook = document.getElementById("input-facebook").value;
    let twitter = document.getElementById("input-twitter").value;
    let linkedin = document.getElementById("input-linkedin").value;
    let direccion = generarDireccion();
    firebase.database().ref('candidatos/' + user.uid).set({
        nombre: nombre,
        email: email,
        direccion: direccion,
        numeroTelefonico: numeroTelefonico,
        facebook: facebook,
        twitter: twitter,
        linkedin: linkedin
    }, (error) => {
        if (error) {
            alert(error);
        } else {
            firebase.auth().currentUser.updateProfile({
                displayName: nombre,
                photoURL: ""
            }).then(function() {
                window.location.href = "mycv.html"
                // Update successful.
            }).catch(function(error) {
                alert(error);
                // An error happened.
            });
        }
    });
}

function generarDireccion() {
    let municipio = document.getElementById("input-municipio").value;
    let colonia = document.getElementById("input-colonia").value;
    let numeroDeCalle = document.getElementById("input-numero-calle").value;
    let calle = document.getElementById("input-calle").value;
    let cp = document.getElementById("input-cp").value;
   return municipio + ',' + colonia + ',CP: ' + cp + ', ' + calle + ',' + numeroDeCalle;
}