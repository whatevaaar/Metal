window.onload = cargarVacantes();

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const categoria = urlParams.get('categoria');
const termino = urlParams.get('termino');

function filtrarPorCategoria() {
    $(".div-vacante").each(function(){
        let cadena = ($(this).data("categoria"));
        if (!cadena.includes(categoria))
            $(this).hide()

    });
}

function filtrarPorTermino() {
    let terminoLC = termino.toLowerCase();
    $(".div-vacante").each(function(){
        let dataCategoria = ($(this).data("categoria")).toLowerCase();
        let dataTitulo = ($(this).data("titulo")).toLowerCase();
        if (!(dataCategoria.includes(terminoLC) || dataTitulo.includes(terminoLC)))
            $(this).hide()

    });
}

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
    if (categoria)
        filtrarPorCategoria();
    if (termino)
            filtrarPorTermino();
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
    let enlaceEditar = document.createElement('a');
    let headerTitulo = document.createElement('h3');
    let spanCategoria = document.createElement('span');
    let spanIndustria = document.createElement('span');

    divCol.classList.add("col-lg-4");
    divCol.classList.add("col-md-6");
    divCol.classList.add("col-sm-6");
    divCol.classList.add("col-xs-12");
    divCol.classList.add("div-vacante");
    divCol.dataset.categoria = childData.categoria;
    divCol.dataset.titulo = childData.titulo;
    divGrid.classList.add("job-grid");
    divGrid.classList.add("border");
    divTitle.classList.add("job-title-sec");
    enlace.href = 'job_single.html?id=' + childData.id;
    enlaceAplicar.href = 'job_single.html?id=' + childData.id;
    enlaceEditar.href = 'edit_job.html?id=' + childData.id;
    enlace.text = childData.titulo;
    enlaceAplicar.text = 'Aplicar';
    enlaceEditar.text = 'Editar';
    enlaceEditar.hidden = !esAdmin();
    headerTitulo.appendChild(enlace);
    spanCategoria.innerText = childData.categoria;
    divCol.appendChild(divGrid);
    divGrid.appendChild(divTitle);
    divTitle.appendChild(headerTitulo);
    divTitle.appendChild(spanCategoria);
    spanIndustria.classList.add("job-lctn");
    spanIndustria.innerText = 'CDMX';
    divGrid.appendChild(spanIndustria);
    divGrid.appendChild(enlaceEditar);
    divGrid.appendChild(enlaceAplicar);
    seccion.appendChild(divCol);
}
