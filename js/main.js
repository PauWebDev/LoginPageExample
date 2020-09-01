// validar los campos del formulario 





// seleccionamos el formulario que queremos validar
let formulario = document.getElementById("miFormulario");


// hacemos que la función se inicie una vez cargada la página
window.onload = iniciar;
// creamos la función
function iniciar() {
    // hacemos que al pulsar el boton de enviar se ejecute la funcion validar
    document.getElementById("enviar").addEventListener("click", validar, false);
}

function validarUser() {
    let elementoname = document.getElementById("username");
    let elementopass = document.getElementById("userpassword");

    // comprobamos que el campo no esté vacio
    if (elementoname.value == "" || elementopass.value == "") {
        alert("it cant be empty");
        return false;
    }
    return true;
}

function validar(e) {
    if (validarUser()) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}