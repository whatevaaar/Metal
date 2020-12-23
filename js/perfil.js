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
    let direccion = generarDireccion();
    firebase.database().ref('candidatos/' + user.uid).set({
        nombre: nombre,
        email: email,
        direccion: direccion,
        numeroTelefonico: numeroTelefonico,
        facebook: facebook,
        twitter: twitter,
        linkedin: linkedin,
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

function generarDireccion() {
    let municipio = document.getElementById("input-municipio").value;
    let colonia = document.getElementById("input-colonia").value;
    let numeroDeCalle = document.getElementById("input-numero-calle").value;
    let calle = document.getElementById("input-calle").value;
    let cp = document.getElementById("input-cp").value;
    return municipio + ',' + colonia + ',CP: ' + cp + ', ' + calle + ',' + numeroDeCalle;
}
