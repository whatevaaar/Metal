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
    let spanEye = document.createElement('span');
    let spanLocation = document.createElement('span');
    let spanTextLocation = document.createElement('span');
    let iconEye = document.createElement('i');
    let iconLocation = document.createElement('i');
    divListing.classList.add("job-listing");
    divSec.classList.add("job-title-sec");
    enlace.href = 'job_single.html?id=' + childData.id;
    enlace.text = childData.titulo;
    headerTitulo.appendChild(enlace);
    spanCategoria.innerText = childData.categoria;
    divSec.appendChild(headerTitulo);
    divSec.appendChild(spanCategoria);
    divListing.appendChild(divSec);
    iconLocation.classList.add("fas");
    iconLocation.classList.add("fa-map-marker-alt");
    iconEye.classList.add("fas");
    iconEye.classList.add("fa-eye");
    spanTextLocation.innerText = "CDMX, México";
    spanLocation.appendChild(iconLocation);
    spanLocation.appendChild(spanTextLocation);
    spanLocation.classList.add("job-lctn");
    spanEye.appendChild(iconEye);
    spanEye.classList.add("fav-job");
    spanFl.classList.add("job-is");
    spanFl.classList.add("ft");
    spanFl.innerText = "Tiempo Completo";
    divListing.appendChild(spanLocation);
    divListing.appendChild(spanEye);
    divListing.appendChild(spanFl);
    seccion.appendChild(divListing);
}
