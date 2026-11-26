
"use strict";

// Comprobamos que el archivo JavaScript se ha cargado.
console.log("JavaScript cargado correctamente");

// =====================================================
// 1. SELECCIÓN DE ELEMENTOS DEL HTML
// =====================================================

// Obtenemos los elementos mediante sus identificadores.
const email = document.getElementById("email");
const emailPrueba = document.getElementById("emailPrueba");
const emailConfirmacion = document.getElementById("emailConfirmacion");
const formCorreo = document.getElementById("formCorreo");
const resultadoCorreo = document.getElementById("resultadoCorreo");

// Mostramos el elemento HTML en la consola.
console.log(email);


// =====================================================
// 2. EVENTO INPUT
// =====================================================

// Detectamos cambios en el correo del formulario de inscripción.
email.addEventListener("input", function () {

    console.log("Correo actual:", email.value);

});


// =====================================================
// 3. FUNCIÓN DE VALIDACIÓN DE CORREOS
// =====================================================

function validarCorreos() {

    // Recuperamos los valores de los dos campos.
    const correoOriginal = emailPrueba.value;
    const correoRepetido = emailConfirmacion.value;

    // Si la confirmación está vacía, dejamos actuar a required.
    if (correoRepetido === "") {

        emailConfirmacion.setCustomValidity("");

        return;
    }

    // Comprobamos si los correos son diferentes.
    if (correoOriginal !== correoRepetido) {

        console.log("Los correos no coinciden");

        // Establecemos un error de validación personalizado.
        emailConfirmacion.setCustomValidity(
            "Los correos electrónicos no coinciden"
        );

    } else {

        console.log("Los correos coinciden");

        // Eliminamos el error de validación personalizado.
        emailConfirmacion.setCustomValidity("");

    }

}


// =====================================================
// 4. VALIDACIÓN DURANTE LA ESCRITURA
// =====================================================

// Validamos cuando se modifica el correo original.
emailPrueba.addEventListener("input", function () {

    // Borramos cualquier resultado anterior.
    resultadoCorreo.textContent = "";

    // Ejecutamos la función de validación.
    validarCorreos();

});

// Validamos cuando se modifica la confirmación.
emailConfirmacion.addEventListener("input", function () {

    resultadoCorreo.textContent = "";

    validarCorreos();

});


// =====================================================
// 5. EVENTO BLUR
// =====================================================

// El evento blur se produce cuando el campo pierde el foco.
emailConfirmacion.addEventListener("blur", function () {

    // Comprobamos nuevamente los correos.
    validarCorreos();

    // Mostramos el mensaje de error si el campo no es válido.
    emailConfirmacion.reportValidity();

});


// =====================================================
// 6. EVENTO SUBMIT
// =====================================================

// Gestionamos el envío del formulario de confirmación.
formCorreo.addEventListener("submit", function (event) {

    // Evitamos el envío real del formulario al servidor.
    event.preventDefault();

    // Ejecutamos nuevamente la validación personalizada.
    validarCorreos();

    // Comprobamos todas las validaciones del formulario.
    if (!formCorreo.reportValidity()) {

        console.log("El formulario contiene errores");

        return;
    }

    // Mostramos un mensaje si todas las validaciones son correctas.
    resultadoCorreo.textContent =
        "Los correos electrónicos coinciden y son válidos.";

    console.log("Formulario validado correctamente");

});


// =====================================================
// 7. EVENTO RESET
// =====================================================

// Detectamos cuándo se restablece el formulario.
formCorreo.addEventListener("reset", function () {

    // Eliminamos cualquier error personalizado.
    emailConfirmacion.setCustomValidity("");

    // Borramos el mensaje de resultado.
    resultadoCorreo.textContent = "";

    console.log("Formulario restablecido");

});
