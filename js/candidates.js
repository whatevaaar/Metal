const inputBusqueda = document.getElementById('input-busqueda');
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
    img.src = childData.imgPerfil;
    divSquare.classList.add("emply-resume-list");
    divSquare.classList.add("square");
    divSquare.dataset.perfil = childData.perfil;
    divSquare.dataset.genero = childData.genero;
    divSquare.dataset.especialidades = childData.especialidades;
    calcularRotacion(divSquare, childData.uid);
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
    enlace.href = "candidate_single.php?id=" + childData.uid;
    enlace.innerText = "Contactar";
    enlace.appendChild(iconoPlus);
    iconoPlus.classList.add("fas");
    iconoPlus.classList.add("fa-plus");
    seccion.appendChild(divSquare);
    span.innerText = childData.perfil;
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
function calcularRotacion(div, uidCandidato) {
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
        div.dataset.rotacion = averageDelta(listaYears.sort());

    }, function (error) {
    });
}

const averageDelta = ([x,...xs]) => {
    if (x === undefined)
        return NaN
    else
        return xs.reduce(
            ([acc, last], x) => [acc + (x - last), x],
            [0, x]
        ) [0] / xs.length
};

function filtrarPorTermino() {
    let termino = inputBusqueda.value.toLowerCase();
    $(".seccion-candidatos").each(function(){
        let dataPerfil = ($(this).data("perfil")).toLowerCase();
        let dataGenero = ($(this).data("genero")).toLowerCase();
        let dataRotacion = ($(this).data("rotacion")).toLowerCase();
        let dataEspecialidades = ($(this).data("especialidades")).toLowerCase();
        if (!(dataPerfil.includes(termino) || dataGenero.includes(termino) || dataRotacion.includes(termino) || dataRotacion.includes(termino)))
            $(this).hide()

    });
}
