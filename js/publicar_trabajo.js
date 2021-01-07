function publicarVacante(){
    comprobarUsuarioEstaLogeado();
    let titulo = document.getElementById("input-titulo").value;
    let fecha= document.getElementById("input-fecha").value;
    let categoria = document.getElementById("select-categoria").value;
    let experiencia = document.getElementById("select-experiencia").value;
    let genero = document.getElementById("select-genero").value;
    let perfil = document.getElementById("select-perfil").value;
    let descripcion = document.getElementById("input-descripcion").value;
    let ref= firebase.database().ref('vacantes').push()
    ref.set({
        titulo: titulo,
        fecha: fecha,
        categoria: categoria,
        experiencia: experiencia,
        genero: genero,
        perfil: perfil,
        descripcion: descripcion,
        id: ref.key
    }, (error) => {
        if (error) {
            alert(error);
        } else {
            alert("Trabajo publicado");
            window.location.href = "job_list.html"
        }
    });
}