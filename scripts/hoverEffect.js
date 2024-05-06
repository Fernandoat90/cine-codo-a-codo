function incTitulo(){
    
    let titulo=document.getElementById("nom");
    titulo.style.transition="0.5s ease";
    titulo.style.transform="scale(1.1)";
}

function volverANormal(){
    let titulo = document.getElementById("nom");
    titulo.style.transform = "scale(1.0)";
}


/*código para verificar el formulario de contacto*/
// Elementos en variables
let nombre          = document.getElementById("nombre");
let apellido        = document.getElementById("apellido");
let mail            = document.getElementById("correo");
let celular         = document.getElementById("celular");
let textareaForm       = document.getElementById("textareaForm");

// Función para quitar el estilo de error a los elementos del form
function quitarClaseError() {
    /*nombre.value="";
    apellido.value="";
    mail.value="";
    celular.value="";
    textareaForm.value="";*/
    let x = document.querySelectorAll(".inputContacto, .inputTextArea");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('noValido');
    }
}

// Función para el botón Borrar para que borre el valor
function reset() {
    quitarClaseError();
    
}



// Cálculo total a pagar
function ValidaCampos() {

    // Ejecuto función para que quite todos los estilos de error en los campos que los tuvieran
    reset();
  
    // Verifico si lleno los siguientes campos, sino que aplique un estilo de error, haga foco en el campo y se detenga
    if (nombre.value === "") {
        alert("Por favor, escribí tu nombre.");
        nombre.classList.add("noValido");
        nombre.focus();
        return;
    }

    if (apellido.value === "" ) {
        alert("Por favor, escribí tu apellido.");
        apellido.classList.add("noValido");
        apellido.focus();
        return;
    }

    if (mail.value === "") {
        alert("Por favor, escribí tu email.");
        mail.classList.add("noValido");
        mail.focus();
        return;
    }
    // Para determinar si el correo electrónico es válido o no
    const emailValido = mail => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail); // expresiones regulares investigar como se escriben
    }

// Verifico que el mail sea válido
    if (!emailValido(mail.value)) {
        alert("Por favor, escribí un correo electrónico válido.");
        mail.classList.add("noValido");
        mail.focus();
        return;
    }

      // Verifico que complete el calular
    if (celular.value == "") {
        alert("Por favor, ingresá un número de celular");
        celular.classList.add("noValido");
        celular.focus();
        return;
    }

    if (textareaForm.value === "") {
        alert("Por favor, ingresá la consulta.");
        textareaForm.classList.add("noValido");
        textareaForm.focus();
        return;
    }
    
}

// Botón Resumen recibe un escuchador y la funcion del cálculo
btnEnviar.addEventListener('click', ValidaCampos);

btnBorrar.addEventListener('click', reset);