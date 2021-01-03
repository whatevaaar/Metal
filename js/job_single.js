const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idVacante = urlParams.get('id');

window.onload = cargarDatosVacante();

function cargarDatosVacante(){
    let vacante = firebase.database().ref('vacantes/' + idVacante);
    vacante.on('value', (snapshot) =>{
        const data = snapshot.val();
        actualizarDatos(data);
    });
}

function actualizarDatos(data){
    document.getElementById("titulo-vacante").innerText = data.titulo;
    document.getElementById("titulo-vacante-2").innerText = data.titulo;
    document.getElementById("descripcion").innerText = data.descripcion;
    document.getElementById("genero").innerText = data.genero;
    document.getElementById("industria").innerText = data.industria;
    document.getElementById("experiencia").innerText = data.experiencia;
    document.getElementById("span-fecha").innerText = data.fecha;
}