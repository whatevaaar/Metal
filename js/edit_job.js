const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idVacante = urlParams.get('id');

window.onload = cargarDatosVacante();

const titulo = document.getElementById("input-titulo");
const fecha= document.getElementById("input-fecha");
const categoria = document.getElementById("select-categoria");
const experiencia = document.getElementById("select-experiencia");
const genero = document.getElementById("select-genero");
const perfil = document.getElementById("select-perfil");
const descripcion = document.getElementById("input-descripcion");

function cargarDatosVacante(){
    let vacante = firebase.database().ref('vacantes/' + idVacante);
    vacante.on('value', (snapshot) =>{
        const data = snapshot.val();
        actualizarDatos(data);
    });
}
function actualizarDatos(data) {
    titulo.value = data.titulo;
    descripcion.value = data.descripcion;
    genero.value = data.genero;
    experiencia.value = data.experiencia;
    fecha.value = data.fecha;
    perfil.value = data.perfil;
}

function publicarVacante(){
    comprobarUsuarioEstaLogeado();
    let ref= firebase.database().ref('vacantes').push()
    ref.set({
        titulo: titulo.value,
        fecha: fecha.value,
        categoria: categoria.value,
        experiencia: experiencia.value,
        genero: genero.value,
        perfil: perfil.value,
        descripcion: descripcion.value,
        id: ref.key
    }, (error) => {
        if (error) {
            alert(error);
        } else {
            alert("Trabajo publicado");
            window.location.href = "job_list.html"
        }
    });
}