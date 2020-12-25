window.onload = cargarUltimasVacantes();
const seccion = document.getElementById("seccion-vacantes-cortas");

function cargarUltimasVacantes() {
    let query = firebase.database().ref("vacantes").limitToLast(5);
    query.on("value", function (snapshot) {
        if (snapshot.empty)
            return;
        snapshot.forEach(function (childSnapshot) {
            let childData = childSnapshot.val();
            crearApartadoVacanteCorto(childData);
        });
    }, function (error) {
    });
}
function crearApartadoVacanteCorto(childData) {
    let divListing = document.createElement('div');
    let divSec = document.createElement('div');
    let enlace = document.createElement('a');
    let headerTitulo = document.createElement('h3');
    let spanCategoria = document.createElement('span');
    let spanFl = document.createElement('span');
    let spanLocation = document.createElement('span');
    let iconEye = document.createElement('span');
    let iconFl = document.createElement('span');
    let iconLocation = document.createElement('span');
    divListing.classList.add("job-listing");
    divSec.classList.add("job-title-sec");
    enlace.href = 'job_single.html?id=' + childData.id;
    enlace.text = childData.titulo;
    headerTitulo.appendChild(enlace);
    spanCategoria.innerText = childData.categoria;
    divSec.appendChild(headerTitulo);
    divSec.appendChild(spanCategoria);
    divListing.appendChild(divSec);
    iconLocation.
    seccion.appendChild(divListing);
}
<div class="job-listing">
    <div class="job-title-sec">
        <div class="c-logo"><img src="images/resource/l2.png" alt=""/></div>
        <h3><a href="#" title="">Mensajero</a></h3>
        <span>Administración</span>
    </div>
    <span class="job-lctn"><i class="fas fa-map-marker-alt"></i>CDMX, México</span>
    <span class="fav-job"><i class="fas fa-eye"></i></span>
    <span class="job-is ft">Tiempo Completo</span>
</div><!-- Job -->

