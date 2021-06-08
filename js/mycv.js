firebase.auth().onAuthStateChanged(function (user) {
    if (user)
        cargarDatosDeUsuario(user);
    else
        window.location.href = "signup.html";
});

const editarTituloExperiencia = document.getElementById('editar-titulo-experiencia');
const editarInicioExperiencia = document.getElementById('editar-inicio-experiencia');
const editarFinExperiencia = document.getElementById('editar-fin-experiencia');
const editarCompania = document.getElementById('editar-compania');
const editarExperienciaKey = document.getElementById('editar-experiencia-key');
const editarDescrip = document.getElementById('editar-descripcion-experiencia');

const editarTituloEducacion = document.getElementById('editar-titulo-educacion');
const editarInicioEducacion = document.getElementById('editar-inicio-educacion');
const editarFinEducacion = document.getElementById('editar-fin-educacion');
const editarInstituto = document.getElementById('editar-instituto');
const editarKey = document.getElementById('editar-key');


const editarSkillInput = document.getElementById('editar-skill');
const editarPorcentajeSkill = document.getElementById('editar-porcentaje-skill');
const editarSkillKey = document.getElementById('editar-skill-key');

function crearApartadoSkills(childSnapshot) {
    let childData = childSnapshot.val();
    let seccion = document.getElementById("seccion-skills");
    let divProgress = document.createElement('div');
    let divBar = document.createElement('div');
    let div = document.createElement('div');
    let spanSkill = document.createElement('span');
    let spanPorcentaje = document.createElement('span');

    let botonEditar = document.createElement('a');
    let smallBoton = document.createElement('small');

    botonEditar.addEventListener('click', function(){
        cargarDatosSkillParaEditar(childSnapshot);
    });

    botonEditar.innerText = 'Editar';
    smallBoton.appendChild(botonEditar)
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
    div.appendChild(smallBoton);
}

function crearApartadoExperiencia(childSnapshot) {
    let childData = childSnapshot.val();
    let seccion = document.getElementById("seccion-experiencia");
    let divHistoria = document.createElement('div');
    let iconoVacio = document.createElement('i');
    let divInfo = document.createElement('div');
    let headerTitulo = document.createElement('h3');
    let iconoFecha = document.createElement('i');
    let spanEmpresa = document.createElement('span');
    let descripcion = document.createElement('p');

    let botonEditar = document.createElement('a');
    let smallBoton = document.createElement('small');

    botonEditar.addEventListener('click', function(){
        cargarDatosExperienciaParaEditar(childSnapshot);
    });
    botonEditar.innerText = 'Editar';

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
    smallBoton.appendChild(botonEditar)
    divInfo.appendChild(headerTitulo);
    headerTitulo.appendChild(spanEmpresa);
    divInfo.appendChild(iconoFecha);
    divInfo.appendChild(descripcion);
    divHistoria.appendChild(smallBoton);
}

function crearApartadoEducacion(childSnapshot) {
    let childData = childSnapshot.val();
    let seccion = document.getElementById("seccion-educacion");
    let divHistoria = document.createElement('div');
    let iconoCap = document.createElement('i');
    let divInfo = document.createElement('div');
    let headerTitulo = document.createElement('h3');
    let iconoFecha = document.createElement('i');
    let spanInstituto = document.createElement('span');
    let botonEditar = document.createElement('a');
    let smallBoton = document.createElement('small');

    botonEditar.addEventListener('click', function(){
        cargarDatosEducacionParaEditar(childSnapshot);
    });
    botonEditar.innerText = 'Editar';

    divHistoria.classList.add("edu-history");
    iconoCap.classList.add("fas");
    iconoCap.classList.add("fa-graduation-cap");
    divInfo.classList.add("edu-hisinfo");
    headerTitulo.innerText = childData.titulo;
    iconoFecha.innerText = childData.fechaInicio.substring(0, 4) + ' - ' + childData.fechaFin.substring(0, 4);
    spanInstituto.innerText = childData.instituto;
    smallBoton.appendChild(botonEditar)
    seccion.appendChild(divHistoria);
    divHistoria.appendChild(iconoCap);
    divHistoria.appendChild(divInfo);
    divInfo.appendChild(headerTitulo);
    divInfo.appendChild(iconoFecha);
    divInfo.appendChild(spanInstituto);
    divHistoria.appendChild(smallBoton);
}

function cargarDatosEducacionParaEditar(childSnapshot){
    let childData = childSnapshot.val();
    editarTituloEducacion.value = childData.titulo;
    editarFinEducacion.value = childData.fechaInicio;
    editarInicioEducacion.value = childData.fechaFin;
    editarInstituto.value = childData.instituto;
    editarKey.value = childSnapshot.key;
    $('#modalEditarEducacion').modal('show');
}


function cargarDatosExperienciaParaEditar(childSnapshot){
    let childData = childSnapshot.val();
    editarExperienciaKey.value = childSnapshot.key;
    editarTituloExperiencia.value = childData.titulo;
    editarInicioExperiencia.value = childData.fechaInicio; 
    editarFinExperiencia.value = childData.fechaFin; 
    editarCompania.value = childData.empresa; 
    editarDescrip.value = childData.descripcion; 
    $('#modalEditarExperiencia').modal('show');
}

function cargarDatosSkillParaEditar(childSnapshot){
    let childData = childSnapshot.val();
    editarSkillInput.value = childData.skill;
    editarPorcentajeSkill.value = childData.porcentaje;
    editarSkillKey.value = childSnapshot.key;
    $('#modalEditarSkill').modal('show');
}

function editarEducacion(){
    let titulo = editarTituloEducacion.value;
    let fechaInicio = editarInicioEducacion.value;
    let fechaFin = editarFinEducacion.value;
    let instituto = editarInstituto.value;
    let key = editarKey.value;
    let ref= firebase.database().ref('candidatos/' + user.uid + '/educacion/' + key).set({
        titulo: titulo,
        fechaInicio: fechaInicio,
        fechaFin: fechaFin,
        instituto: instituto,
    }, (error) => {
        if (error) {
            alert(error);
        } else {
            alert("Editado con éxito");
            $('#modalEditarEducacion').modal('hide');
        }
    });
}

function editarExperiencia(){
    let titulo = editarTituloExperiencia.value;
    let fechaInicio = editarInicioExperiencia.value;
    let fechaFin = editarFinExperiencia.value;
    let empresa = editarCompania.value;
    let descripcion = editarDescrip.value;
    let key = editarExperienciaKey.value;
    let ref= firebase.database().ref('candidatos/' + user.uid + '/experiencia/'+ key).set({
        titulo: titulo,
        fechaInicio: fechaInicio,
        fechaFin: fechaFin,
        empresa: empresa,
        descripcion: descripcion
    }, (error) => {
        if (error) {
            alert(error);
        } else {
            alert("Editado con éxito");
            $('#modalEditarExperiencia').modal('hide');
        }
    });
}

function editarSkill(){
    let skill = editarSkillInput.value;
    let porcentaje = editarPorcentajeSkill.value;
    let key = editarSkillKey.value;
    let ref= firebase.database().ref('candidatos/' + user.uid + '/skills/' + key).set({
        skill: skill,
        porcentaje: porcentaje
    }, (error) => {
        if (error) {
            alert(error);
        } else {
            alert("Editado con éxito");
            $('#modalEditarSkill').modal('hide');
        }
    });
}

function crearApartadoIngles(childData) {
    let seccion = document.getElementById("seccion-ingles")
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

function cargarDatosExperiencia() {
    let query = firebase.database().ref("candidatos/" + user.uid + "/experiencia");
    query.on("value", function (snapshot) {
        if (snapshot.empty)
            return;
        document.getElementById('seccion-experiencia').innerHTML = '';
        snapshot.forEach(function (childSnapshot) {
            crearApartadoExperiencia(childSnapshot);
        });
    }, function (error) {
    });
}

function cargarDatosEducacion() {
    let query = firebase.database().ref("candidatos/" + user.uid + "/educacion");
    query.on("value", function (snapshot) {
        if (snapshot.empty)
            return;
        document.getElementById('seccion-educacion').innerHTML = '';
        snapshot.forEach(function (childSnapshot) {
            crearApartadoEducacion(childSnapshot);
        });
    }, function (error) {
    });
}

function cargarDatosSkills() {
    let query = firebase.database().ref("candidatos/" + user.uid + "/skills");
    query.on("value", function (snapshot) {
        if (snapshot.empty)
            return;
        document.getElementById('seccion-skills').innerHTML = '';
        snapshot.forEach(function (childSnapshot) {
            crearApartadoSkills(childSnapshot);
        });
    }, function (error) {
    });
}

function cargarDatosIngles() {
    let query = firebase.database().ref("candidatos/" + user.uid + "/ingles");
    query.on("value", function (snapshot) {
        if (snapshot.empty)
            return;
        document.getElementById('seccion-ingles').innerHTML = '';
        snapshot.forEach(function (childSnapshot) {
            let childData = childSnapshot;
            crearApartadoIngles(childData);
        });
    }, function (error) {
    });
}

function cargarDatosDeUsuario(user) {
    document.getElementById("header-mi-cv").innerText = "CV de " + user.displayName;
    cargarDatosEducacion();
    cargarDatosExperiencia();
    cargarDatosSkills();
    cargarDatosIngles();
}
