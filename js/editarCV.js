function agregarEducacion() {
    comprobarUsuarioEstaLogeado();
    let titulo = document.getElementById("input-titulo-educacion").value;
    let fechaInicio = document.getElementById("fecha-inicio-educacion").value;
    let fechaFin = document.getElementById("fecha-fin-educacion").value;
    let instituto = document.getElementById("input-instituto").value;
    let descripcion = document.getElementById("input-descripcion-educacion").value;
    let ref= firebase.database().ref('candidatos/' + user.uid + '/educacion').push()
    ref.set({
        titulo: titulo,
        fechaInicio: fechaInicio,
        fechaFin: fechaFin,
        instituto: instituto,
        descripcion: descripcion
    }, (error) => {
        if (error) {
            alert(error);
        } else {
            alert("Agregado a CV!");
        }
    });
}

function agregarExperiencia() {
    comprobarUsuarioEstaLogeado();
    let titulo = document.getElementById("input-titulo-experiencia").value;
    let fechaInicio = document.getElementById("fecha-inicio-experiencia").value;
    let fechaFin = document.getElementById("fecha-fin-experiencia").value;
    let empresa = document.getElementById("input-compania").value;
    let actual = document.getElementById("input-presente").value;
    let descripcion = document.getElementById("input-descripcion-experiencia").value;
    let ref= firebase.database().ref('candidatos/' + user.uid + '/experiencia').push()
    ref.set({
        titulo: titulo,
        fechaInicio: fechaInicio,
        fechaFin: fechaFin,
        empresa: empresa,
        trabajoActual: actual,
        descripcion: descripcion
    }, (error) => {
        if (error) {
            alert(error);
        } else {
            alert("Agregado a CV!");
        }
    });
}

function agregarSkill() {
    comprobarUsuarioEstaLogeado();
    let skill = document.getElementById("input-skill").value;
    let porcentaje = document.getElementById("input-porcentaje-skill").value;
    let ref= firebase.database().ref('candidatos/' + user.uid + '/skills').push()
    ref.set({
        skill: skill,
        porcentaje: porcentaje
    }, (error) => {
        if (error) {
            alert(error);
        } else {
            alert("Agregado a CV!");
        }
    });
}

function actualizarIngles() {
    comprobarUsuarioEstaLogeado();
    let hablado = document.getElementById("input-ingles-hablado").value;
    let escrito = document.getElementById("input-porcentaje-skill").value;
    firebase.database().ref('candidatos/' + user.uid + '/ingles').set({
        hablado: hablado,
        escrito: escrito
    }, (error) => {
        if (error) {
            alert(error);
        } else {
            alert("Agregado a CV!");
        }
    });
}