window.onload = cargarVacantes();

function cargarVacantes() {
    let query = firebase.database().ref("vacantes");
    let contador = 0;
    query.on("value", function (snapshot) {
        if (snapshot.empty)
            return;
        snapshot.forEach(function (childSnapshot) {
            let childData = childSnapshot.val();
            contador += 1;
            crearApartadoVacante(childData);
        });
    document.getElementById("header-trabajos").innerText = contador + ' Trabajos & Vacantes';
    }, function (error) {
    });
}

function crearApartadoVacante(childData) {
    let seccion = document.getElementById("seccion-vacantes");
    let divCol = document.createElement('div');
    let divGrid = document.createElement('div');
    let divTitle = document.createElement('div');
    let enlace = document.createElement('a');
    let enlaceAplicar = document.createElement('a');
    let headerTitulo = document.createElement('h3');
    let spanCategoria = document.createElement('span');
    let spanIndustria = document.createElement('span');

    divCol.classList.add("col-lg-4");
    divCol.classList.add("col-md-6");
    divCol.classList.add("col-sm-6");
    divCol.classList.add("col-xs-12");
    divGrid.classList.add("job-grid");
    divGrid.classList.add("border");
    divTitle.classList.add("job-title-sec");
    enlace.href = 'job_single.html?id=' + childData.id;
    enlaceAplicar.href = 'job_single.html?id=' + childData.id;
    enlace.text = childData.titulo;
    enlaceAplicar.text = 'Aplicar';
    headerTitulo.appendChild(enlace);
    spanCategoria.innerText = childData.categoria;
    divCol.appendChild(divGrid);
    divGrid.appendChild(divTitle);
    divTitle.appendChild(headerTitulo);
    divTitle.appendChild(spanCategoria);
    spanIndustria.classList.add("job-lctn");
    spanIndustria.innerText = childData.industria;
    divGrid.appendChild(spanIndustria);
    divGrid.appendChild(enlaceAplicar);
    seccion.appendChild(divCol);
}
