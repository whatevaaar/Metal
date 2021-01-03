window.onload = cargarDatosSiExisten();

function cargarDatosSiExisten(){

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
    let genero = document.getElementById("input-genero").value;
    let sueldo = document.getElementById("input-sueldo").value;
    let fechaNacimiento = document.getElementById("input-nacimiento").value;
    let industria = document.getElementById("input-industria").value;
    let direccion = generarDireccion();
    let especialidades = conseguirEspecialidades();
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
        genero: genero,
        sueldo: sueldo,
        industria: industria,
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
                window.location.href = "editarCV.html"
                // Update successful.
            }).catch(function (error) {
                alert(error);
                // An error happened.
            });
        }
    });
}

function conseguirEspecialidades(){
    let valoresTokenize = $('.tokenize-demo').val();
    return valoresTokenize.toString();
}

function generarDireccion() {
    let municipio = document.getElementById("input-municipio").value;
    let colonia = document.getElementById("input-colonia").value;
    let estado = document.getElementById("input-estado").value;
    return estado + ',' + municipio + ', ' + colonia;
}
