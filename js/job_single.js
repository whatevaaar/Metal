const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idVacante = urlParams.get('id');

window.onload = cargarDatosVacante();

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        document.getElementById('boton-eliminar').hidden = !esAdmin();
    } else {
        // No user is signed in.
    }
});

function cargarDatosVacante(){
    let vacante = firebase.database().ref('vacantes/' + idVacante);
    vacante.on('value', (snapshot) =>{
        const data = snapshot.val();
        actualizarDatos(data);
    });
}

function eliminarVacante(){
    firebase.database().ref('vacantes/' + idVacante).remove();
    window.location.ref = "job_list.html";
}

function actualizarDatos(data){
    document.getElementById("titulo-vacante").innerText = data.titulo;
    document.getElementById("titulo-vacante-2").innerText = data.titulo;
    document.getElementById("descripcion").innerText = data.descripcion;
    document.getElementById("genero").innerText = data.genero;
    document.getElementById("experiencia").innerText = data.experiencia;
    document.getElementById("span-fecha").innerText = data.fecha;
    document.getElementById("perfil").innerText = data.perfil;
}