window.onload = cargarCandidatos();

function crearApartadoCandidato(childData) {
    let seccion = document.getElementById("seccion-candidatos");
    let divSquare = document.createElement('div');
    let divThumb = document.createElement('div');
    let divInfo = document.createElement('div');
    let divShort = document.createElement('div');
    let header = document.createElement('h3');
    let img = document.createElement('img');
    let iconoPlus = document.createElement('i');
    let iconoMapa = document.createElement('i');
    let parrafo = document.createElement('p');
    let span = document.createElement('span');
    let enlace = document.createElement('a');
    img.classList.add("img-thumbnail");
    divSquare.classList.add("emply-resume-list");
    divSquare.classList.add("square");
    divSquare.appendChild(divThumb);
    divSquare.appendChild(divInfo);
    divSquare.appendChild(divShort);
    divThumb.classList.add("emply-resume-thumb");
    divInfo.classList.add("emply-resume-info");
    divShort.classList.add("shortlists");
    header.innerText = childData.nombre;
    divInfo.appendChild(header);
    divThumb.appendChild(img);
    divShort.appendChild(enlace);
    enlace.href = "#";
    enlace.innerText = "Contactar";
    enlace.appendChild(iconoPlus);
    iconoPlus.classList.add("fas");
    iconoPlus.classList.add("fa-plus");
    seccion.appendChild(divSquare);
    span.innerText = "Diseñador";
    parrafo.appendChild(iconoMapa);
    parrafo.innerText = "CDMX, México";
    iconoMapa.classList.add("fas");
    iconoMapa.classList.add("fa-map-marker");
    divInfo.appendChild(span);
    divInfo.appendChild(parrafo);
}

function cargarCandidatos() {
    let query = firebase.database().ref("candidatos");
    query.on("value", function (snapshot) {
        if (snapshot.empty)
            return;
        snapshot.forEach(function (childSnapshot) {
            let childData = childSnapshot.val();
            crearApartadoCandidato(childData);
        });
    }, function (error) {
    });
}
