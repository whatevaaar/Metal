firebase.auth().onAuthStateChanged(function (user) {
    if (user)
        cargarDatosDeUsuario(user);
    else
        window.location.href = "signup.html";
});

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
    spanPorcentaje.innerText = childData.porcentaje + '%';
    spanSkill.innerText = childData.skill;

    seccion.appendChild(divProgress);
    divProgress.appendChild(spanSkill);
    divProgress.appendChild(divBar);
    divBar.appendChild(div);
    div.appendChild(spanPorcentaje);
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

function cargarDatosExperiencia() {
    let query = firebase.database().ref("candidatos/" + user.uid + "/experiencia");
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

function cargarDatosEducacion() {
    let query = firebase.database().ref("candidatos/" + user.uid + "/educacion");
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

function cargarDatosSkills() {
    let query = firebase.database().ref("candidatos/" + user.uid + "/skills");
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

function cargarDatosIngles() {
    let query = firebase.database().ref("candidatos/" + user.uid + "/inglés");
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

function cargarDatosDeUsuario(user) {
    document.getElementById("header-mi-cv").innerText = "CV de " + user.displayName;
    cargarDatosEducacion();
    cargarDatosExperiencia();
    cargarDatosSkills();
    cargarDatosIngles();
}
