const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idCandidato = urlParams.get('id');

window.onload = cargarDatosCandidato();
const averageDelta = ([x,...xs]) => {
    if (x === undefined)
        return NaN
    else
        return xs.reduce(
            ([acc, last], x) => [acc + (x - last), x],
            [0, x]
        ) [0] / xs.length
};


function cargarDatosCandidato() {
    let refCandidato = firebase.database().ref('candidatos/' + idCandidato);
    refCandidato.on('value', (snapshot) => {
        const candidato = snapshot.val();
        actualizarDatos(candidato);
    });
}

function calcularRotacion(uidCandidato) {
    listaYears = []
    let query = firebase.database().ref("candidatos/" + uidCandidato + "/experiencia");
    query.on("value", function (snapshot) {
        if (snapshot.empty)
            return;
        snapshot.forEach(function (childSnapshot) {
            let childData = childSnapshot.val();
            if (childData.fechaFin !== "")
                listaYears.push(Number(childData.fechaFin.substring(0,4)));
        });
        document.getElementById('span-rotacion').innerText = averageDelta(listaYears.sort());

    }, function (error) {
    });
}

function actualizarDatos(candidato) {
    calcularRotacion(candidato.uid);
    cargarDatosExperiencia(candidato.uid);
    cargarDatosEducacion(candidato.uid);
    cargarDatosSkills(candidato.uid);
    cargarDatosIngles(candidato.uid);
    actualizarSeccionEspecialidades(candidato.especialidades);
    document.getElementById('span-contactar').innerText = 'Contactar a ' + candidato.nombre;
    document.getElementById('h3-nombre').innerText = candidato.nombre;
    document.getElementById('i-perfil').innerText = candidato.perfil;
    document.getElementById('span-ubicacion').innerText = candidato.direccion;
    document.getElementById('span-genero').innerText = candidato.genero;
    document.getElementById('span-sueldo').innerText = candidato.sueldo;
    document.getElementById('span-edad').innerText = calcularEdad(candidato.fechaNacimiento);
    document.getElementById('img-perfil').src = candidato.imgPerfil;
    document.getElementById('a-facebook').src = candidato.facebook;
    document.getElementById('a-twitter').src = candidato.twitter;
    document.getElementById('a-linkedin').src = candidato.linkedin;
    document.getElementById('a-mailto').src = 'mailto:' + candidato.email;
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

function cargarDatosExperiencia(uidCandidato) {
    let query = firebase.database().ref("candidatos/" + uidCandidato + "/experiencia");
    query.on("value", function (snapshot) {
        if (snapshot.empty)
            return;
        snapshot.forEach(function (childSnapshot) {
            let childData = childSnapshot.val();
            crearApartadoExperiencia(childData);
        });
    }, function (error) {
    });
}

function cargarDatosEducacion(uidCandidato) {
    let query = firebase.database().ref("candidatos/" + uidCandidato + "/educacion");
    query.on("value", function (snapshot) {
        if (snapshot.empty)
            return;
        snapshot.forEach(function (childSnapshot) {
            let childData = childSnapshot.val();
            crearApartadoEducacion(childData);
        });
    }, function (error) {
    });
}

function cargarDatosIngles(uidCandidato) {
    let query = firebase.database().ref("candidatos/" + uidCandidato + "/ingles");
    query.on("value", function (snapshot) {
        if (snapshot.empty)
            return;
        snapshot.forEach(function (childSnapshot) {
            let childData = childSnapshot;
            crearApartadoIngles(childData);
        });
    }, function (error) {
    });
}

function cargarDatosSkills(uidCandidato) {
    let query = firebase.database().ref("candidatos/" + uidCandidato + "/skills");
    query.on("value", function (snapshot) {
        if (snapshot.empty)
            return;
        snapshot.forEach(function (childSnapshot) {
            let childData = childSnapshot.val();
            crearApartadoSkills(childData);
        });
    }, function (error) {
    });
}

function crearApartadoSkills(childData) {
    let seccion = document.getElementById("seccion-skills");
    let divProgress = document.createElement('div');
    let divBar = document.createElement('div');
    let div = document.createElement('div');
    let spanSkill = document.createElement('span');
    let spanPorcentaje = document.createElement('span');
    divProgress.classList.add("progress-sec");
    divProgress.classList.add("with-edit");
    divBar.classList.add("progressbar");
    div.classList.add("progress");
    div.style.width = childData.porcentaje + '%';
    spanPorcentaje.innerText = childData.porcentaje + '%';
    spanSkill.innerText = childData.skill;
    seccion.appendChild(divProgress);
    divProgress.appendChild(spanSkill);
    divProgress.appendChild(divBar);
    divBar.appendChild(div);
    div.appendChild(spanPorcentaje);
}

function crearApartadoIngles(childData) {
    let seccion = document.getElementById("seccion-ingles");
    let divProgress = document.createElement('div');
    let divBar = document.createElement('div');
    let div = document.createElement('div');
    let spanSkill = document.createElement('span');
    let spanPorcentaje = document.createElement('span');
    divProgress.classList.add("progress-sec");
    divProgress.classList.add("with-edit");
    divBar.classList.add("progressbar");
    div.classList.add("progress");
    div.style.width = childData.val() + '%';
    spanPorcentaje.innerText = childData.val() + '%';
    spanSkill.innerText = childData.key;
    seccion.appendChild(divProgress);
    divProgress.appendChild(spanSkill);
    divProgress.appendChild(divBar);
    divBar.appendChild(div);
    div.appendChild(spanPorcentaje);
}

function crearApartadoEducacion(childData) {
    let seccion = document.getElementById("seccion-educacion");
    let divHistoria = document.createElement('div');
    let iconoCap = document.createElement('i');
    let divInfo = document.createElement('div');
    let headerTitulo = document.createElement('h3');
    let iconoFecha = document.createElement('i');
    let spanInstituto = document.createElement('span');
    let descripcion = document.createElement('p');

    divHistoria.classList.add("edu-history");
    iconoCap.classList.add("fas");
    iconoCap.classList.add("fa-graduation-cap");
    divInfo.classList.add("edu-hisinfo");
    headerTitulo.innerText = childData.titulo;
    iconoFecha.innerText = childData.fechaInicio.substring(0, 4) + ' - ' + childData.fechaFin.substring(0, 4);
    spanInstituto.innerText = childData.instituto;
    descripcion.innerText = childData.descripcion;

    seccion.appendChild(divHistoria);
    divHistoria.appendChild(iconoCap);
    divHistoria.appendChild(divInfo);
    divInfo.appendChild(headerTitulo);
    divInfo.appendChild(iconoFecha);
    divInfo.appendChild(spanInstituto);
    divInfo.appendChild(descripcion);
}

function crearApartadoExperiencia(childData) {
    let seccion = document.getElementById("seccion-experiencia");
    let divHistoria = document.createElement('div');
    let iconoVacio = document.createElement('i');
    let divInfo = document.createElement('div');
    let headerTitulo = document.createElement('h3');
    let iconoFecha = document.createElement('i');
    let spanEmpresa = document.createElement('span');
    let descripcion = document.createElement('p');

    divHistoria.classList.add("edu-history");
    divHistoria.classList.add("style2");
    divInfo.classList.add("edu-hisinfo");
    headerTitulo.innerText = childData.titulo;
    iconoFecha.innerText = childData.fechaInicio.substring(0, 4) + ' - ' + childData.fechaFin.substring(0, 4);
    spanEmpresa.innerText = childData.empresa;
    descripcion.innerText = childData.descripcion;

    seccion.appendChild(divHistoria);
    divHistoria.appendChild(iconoVacio);
    divHistoria.appendChild(divInfo);
    divInfo.appendChild(headerTitulo);
    headerTitulo.appendChild(spanEmpresa);
    divInfo.appendChild(iconoFecha);
    divInfo.appendChild(descripcion);
}

function calcularEdad(fechaDeNacimiento) {
    let birthday = new Date(fechaDeNacimiento);
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}