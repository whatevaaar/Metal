const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idCandidato = urlParams.get('id');

window.onload = cargarDatosCandidato();

function cargarDatosCandidato(){
    let refCandidato = firebase.database().ref('candidatos/' + idCandidato);
    refCandidato.on('value', (snapshot) =>{
        const candidato = snapshot.val();
        actualizarDatos(candidato);
    });
}

function actualizarDatos(candidato){
    actualizarSeccionEspecialidades(candidato.especialidades);
    document.getElementById('span-contactar').innerText = 'Contactar a ' + candidato.nombre;
}

function actualizarSeccionEspecialidades(especialidades) {
    let listaDeEspecialidades = especialidades.split(',');
    listaDeEspecialidades.forEach(especialidad => agregarEspecialidad(especialidad))
}

function agregarEspecialidad(element) {
    let enlace = document.createElement('a');
    enlace.innerText = element;
    document.getElementById('div-especialidades').appendChild(enlace);
}
