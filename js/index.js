window.onload = cargarUltimasVacantes();
const seccion = document.getElementById("seccion-vacantes-cortas");

function cargarUltimasVacantes() {
    let query = firebase.database().ref("vacantes");
    let total = 0, pr = 0, trainning = 0, design = 0, multimedia = 0, business = 0, digital = 0, planeacion = 0, administrativo = 0;
    query.on("value", function (snapshot) {
        if (snapshot.empty)
            return;
        snapshot.forEach(function (childSnapshot) {
            let childData = childSnapshot.val();
            total += 1;
            if (total < 5)
                crearApartadoVacanteCorto(childData);
            if (childData.perfil.includes("PR"))
                pr += 1;
            else if (childData.perfil.includes("Trainning"))
                trainning += 1;
            else if (childData.perfil.includes("Diseño"))
                design += 1;
            else if (childData.perfil.includes("Multimedia"))
                multimedia += 1;
            else if (childData.perfil.includes("Business"))
                business += 1;
            else if (childData.perfil.includes("Digital"))
                digital += 1;
            else if (childData.perfil.includes("Planeación"))
                planeacion += 1;
            else if (childData.perfil.includes("Administrativo"))
                administrativo += 1;
        });
        document.getElementById('span-categorias').innerText = total + ' posiciones abiertas';
        document.getElementById('p-pr').innerText = pr + ' posiciones abiertas';
        document.getElementById('p-trainning').innerText = trainning + ' posiciones abiertas';
        document.getElementById('p-design').innerText = design + ' posiciones abiertas';
        document.getElementById('p-multimedia').innerText = multimedia + ' posiciones abiertas';
        document.getElementById('p-business').innerText = business + ' posiciones abiertas';
        document.getElementById('p-digital').innerText = digital + ' posiciones abiertas';
        document.getElementById('p-planeacion').innerText = planeacion + ' posiciones abiertas';
        document.getElementById('p-administrativo').innerText = administrativo + ' posiciones abiertas';
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
