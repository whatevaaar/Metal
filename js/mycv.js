firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        cargarDatosDeUsuario(user);
    } else {

    }
});

function cargarDatosDeUsuario(user) {
    document.getElementById("header-mi-cv").innerText = "CV de " + user.displayName;
}
