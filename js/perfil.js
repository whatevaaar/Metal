
firebase.auth().onAuthStateChanged(function (user) {
    if (user)
        cargarDatosSiExisten(user);
});
let opcionesPRComunicion = {
    "Tecnología": "Tecnología",
    "Corporativa": "Corporativa",
    "Eventos": "Eventos",
    "Industrial": "Industrial",
    "Influencers": "Influencers",
    "Líderes de opinión": "Líderes de opinión",
    "Corporativa": "Corporativa",
    "Manejo de crisis": "Manejo de crisis",
    "Medios": "Medios"
};

let opcionesTrainning = {
    "Entrenamiento de crisis": "Entrenamiento de crisis",
    "Entrenamiento en Public Speaking": "Entrenamiento en Public Speaking",
    "Entrenamiento de Medios": "Entrenamiento de Medios"
};

let opcionesGraphic = {
    "Identidad Corporativa": "Identidad Corporativa",
    "Branding": "Branding",
    "Arquitectura de Marca": "Arquitectura de Marca",
    "Desarrollo de los parámetros y bases gráficas de la marca.": "Desarrollo de los parámetros y bases gráficas de la marca.",
    "Desarrollo de materiales. Presentaciones, infografías, flyers, entre otros.": "Desarrollo de materiales. Presentaciones, infografías, flyers, entre otros."
};

let opcionesMultimedia = {
    "Fotografías Corporativas. Sesión fotográfica para directivos y empleados en general.": "Fotografías Corporativas. Sesión fotográfica para directivos y empleados en general.",
    "Audio / Podcasts. Grabación y edición de material de audio.": "Audio / Podcasts. Grabación y edición de material de audio.",
    "Video. Levantamiento de imagen, grabación y edición de material de video.": "Video. Levantamiento de imagen, grabación y edición de material de video.",
    "Web. Desarrollo gráfico de plataformas.": "Web. Desarrollo gráfico de plataformas."
};

let opcionesBusiness = {
    "Monitoreo de medios (SCAN)": "Monitoreo de medios (SCAN)",
    "Investigación de Mercado": "Investigación de Mercado",
    "Análisis de redes sociales": "Análisis de redes sociales",
};
let opcionesDigital = {
    "RRSS": "RRSS",
    "Certificaciones en Google Ads. Plataforma de Ads para Facebook, Twitter y LinkedIN.": "Certificaciones en Google Ads. Plataforma de Ads para Facebook, Twitter y LinkedIN.",
    "Hostings, dominios": "Hostings, dominios",
    "Página Web": "Página Web",
    "Mantenimiento Web": "Mantenimiento Web",
    "Aplicaciones Digitales": "Aplicaciones Digitales",
    "Landing pages para campañas": "Landing pages para campañas",
    "Blog": "Blog",
    "Social Listening": "Social Listening",
    "Compra de Medios Digitales":"Compra de Medios Digitales",
    "Google Analytics": "Google Analytics"
};
let opcionesPRMedios = {
    "Conocimiento general de medios (principales medios, principales noticieros, principales líderes de opinión)": "Conocimiento general de medios (principales medios, principales noticieros, principales líderes de opinión)",
    "Relación con medios nacionales y locales del área editorial.": "Relación con medios nacionales y locales del área editorial.",
    "Relación con editores y reporteros de distintas fuentes.": "Relación con editores y reporteros de distintas fuentes.",
    "Fuentes destacadas: Negocios, tecnología, estilo de vida, consumo, lujo, gastronomía, pharma, fintec, cultura.": "Fuentes destacadas: Negocios, tecnología, estilo de vida, consumo, lujo, gastronomía, pharma, fintec, cultura.",
    "Coordinación y manejo de viajes con medios.": "Coordinación y manejo de viajes con medios.",
    "Coordinación y manejo de eventos con medios: Día de medios, entrevistas, presentaciones, conferencias de prensa.": "Coordinación y manejo de eventos con medios: Día de medios, entrevistas, presentaciones, conferencias de prensa.",
    "Coordinación, metodología e implementación de eventos para medios en formato digital.": "Coordinación, metodología e implementación de eventos para medios en formato digital.",
    "Convocatoria de medios (desde la asistencia hasta la gestión y cierre de la nota).": "Convocatoria de medios (desde la asistencia hasta la gestión y cierre de la nota).",
    "Experiencia en desarrollo de documentos clave: boletines de prensa, reseñas, publireportajes, Q&A, mensajes clave, perfiles, líneas de comunicación.":"Experiencia en desarrollo de documentos clave: boletines de prensa, reseñas, publireportajes, Q&A, mensajes clave, perfiles, líneas de comunicación."
};
let opcionesAdministrativo = {
    "Finazas":"Finazas",
    "Administración":"Administración",
    "Contabilidad e impuestos":"Contabilidad e impuestos",
    "Facturación":"Facturación",
    "Cuentas por pagar y por cobrar":"Cuentas por pagar y por cobrar",
    "Tesorería":"Tesorería",
    "Servicios generales":"Servicios generales",
    "Sistemas, Hardware y Software":"Sistemas, Hardware y Software",
};
let opcionesPlaneacion = {
    "Prospección de Nuevos negocios":"Prospección de Nuevos negocios",
    "Carterea de clientes":"Carterea de clientes",
    "Inicio y cierre de ventas":"Inicio y cierre de ventas",
};

function cargarDatosSiExisten() {
    let query = firebase.database().ref("candidatos/" + user.uid);
    query.on("value", function (snapshot) {
        if (snapshot.empty || !snapshot.val())
            return;
        cargarDatosDePerfil(snapshot.val());
    }, function (error) {
    });
}

function cargarDatosDePerfil(candidato) {
    document.getElementById("input-nombre").value = candidato.nombre;
    document.getElementById("img-upload").src = candidato.imgPerfil;
    document.getElementById("input-email").value = candidato.email;
    document.getElementById("input-numero-telefonico").value = candidato.numeroTelefonico;
    document.getElementById("input-facebook").value = candidato.facebook;
    document.getElementById("input-twitter").value = candidato.twitter;
    document.getElementById("input-linkedin").value = candidato.linkedin;
    document.getElementById("input-perfil").value = candidato.perfil;
    document.getElementById("input-acerca").value = candidato.acerca;
    document.getElementById("input-genero").value = candidato.genero;
    document.getElementById("input-sueldo").value = candidato.sueldo;
    document.getElementById("input-nacimiento").value = candidato.fechaNacimiento;
    document.getElementById("input-municipio").value = candidato.direccion.split(',')[0];
    document.getElementById("input-colonia").value = candidato.direccion.split(',')[1];
    document.getElementById("input-estado").value = candidato.direccion.split(',')[2];
    document.getElementById("input-portafolio").value = candidato.portafolio;
    inicializarTokenize();
    candidato.especialidades.split(',').forEach(  function (especialidad){
        $('.tokenize-demo').tokenize2().trigger('tokenize:tokens:add', [especialidad, especialidad, true]);
        }
    );
    candidato.softSkills.split(',').forEach(  function (especialidad){
        $('.tokenize-soft-skills').tokenize2().trigger('tokenize:tokens:add', [especialidad, especialidad, true]);
        });
}
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#img-upload')
                .attr('src', e.target.result)
                .width(150)
                .height(200);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function cargarImgDePerfil() {
    document.getElementById('img-loader').style.display = 'block';
    let storageRef = firebase.storage().ref('imagenes_de_perfil/' + user.uid);
    let uploadTask = storageRef.put($('#input-img').prop('files')[0]);
    uploadTask.on('state_changed', function (snapshot) {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused');
                break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
                console.log('Upload is running');
                break;
        }
    }, function (error) {
        // Handle unsuccessful uploads
        alert("Error, intenta de nuevo");
    }, function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log('File available at', downloadURL);
            guardarPerfil(downloadURL)
        });
    });

}

function guardarPerfil(urlImgPerfil) {
    if (!user)
        window.location.href = "signup.html";
    let nombre = document.getElementById("input-nombre").value;
    let email = document.getElementById("input-email").value;
    let numeroTelefonico = document.getElementById("input-numero-telefonico").value;
    let facebook = document.getElementById("input-facebook").value;
    let twitter = document.getElementById("input-twitter").value;
    let linkedin = document.getElementById("input-linkedin").value;
    let perfil = document.getElementById("input-perfil").value;
    let acerca = document.getElementById("input-acerca").value;
    let genero = document.getElementById("input-genero").value;
    let portafolio = document.getElementById("input-portafolio").value;
    let sueldo = document.getElementById("input-sueldo").value;
    let fechaNacimiento = document.getElementById("input-nacimiento").value;
    let direccion = generarDireccion();
    let especialidades = conseguirEspecialidades();
    let softSkills = conseguirSoftSkills();
    firebase.database().ref('candidatos/' + user.uid).set({
        nombre: nombre,
        email: email,
        uid: user.uid,
        direccion: direccion,
        especialidades: especialidades,
        numeroTelefonico: numeroTelefonico,
        facebook: facebook,
        twitter: twitter,
        linkedin: linkedin,
        perfil: perfil,
        portafolio: portafolio,
        acerca: acerca,
        genero: genero,
        sueldo: sueldo,
        softSkills: softSkills,
        fechaNacimiento: fechaNacimiento,
        imgPerfil: urlImgPerfil
    }, (error) => {
        if (error) {
            alert(error);
        } else {
            firebase.auth().currentUser.updateProfile({
                displayName: nombre,
                photoURL: urlImgPerfil
            }).then(function () {
                window.location.href = "mycv.html"
                // Update successful.
            }).catch(function (error) {
                alert(error);
                // An error happened.
            });
        }
    });
}

function conseguirEspecialidades() {
    let valoresTokenize = $('.tokenize-demo').val();
    return valoresTokenize.toString();
}

function conseguirSoftSkills() {
    let valoresTokenize = $('.tokenize-soft-skills').val();
    return valoresTokenize.toString();
}

function generarDireccion() {
    let municipio = document.getElementById("input-municipio").value;
    let colonia = document.getElementById("input-colonia").value;
    let estado = document.getElementById("input-estado").value;
    return estado + ',' + municipio + ', ' + colonia;
}

function inicializarTokenize(){
    $('.tokenize-demo').tokenize2({
        dataSource: 'select',
        tokensMaxItems: 3,
        searchFromStart: false,
        placeholder: 'Escoge hasta 3 especialidades dependientes de tu perfil'
    });
    $('.tokenize-demo').on('tokenize:select', function(container){
        $(this).tokenize2().trigger('tokenize:search', [$(this).tokenize2().input.val()]);
    });
    $('.tokenize-soft-skills').tokenize2({
        tokensMaxItems: 3,
        tokensAllowCustom: true,
        placeholder: 'Escoge hasta 3 soft skills',
        delimiter: [',', '-']
    });
}