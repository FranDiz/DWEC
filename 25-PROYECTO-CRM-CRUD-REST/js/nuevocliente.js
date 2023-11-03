document.addEventListener("DOMContentLoaded", function () {

    const nombre = document.querySelector("#nombre");
    const email = document.querySelector("#email");
    const telefono = document.querySelector("#telefono");
    const empresa = document.querySelector("#empresa");
    const formulario = document.querySelector("#formulario");

    nombre.addEventListener("blur", validar);
    email.addEventListener("blur", validar);
    telefono.addEventListener("blur", validar);
    empresa.addEventListener("blur", validar);



    function validarCliente(nombreCliente, emailCliente, telefonoCliente, empresaCliente) {
        let clienteValido = true;
        //Validación del nombre y apellido con espacios
        const nombreRegex = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/
        if (!nombreRegex.test(nombreCliente)) {
            clienteValido = false;
        }
        //Validación del email, siguiendo el formato ejemplo@correo.com
        const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        if (!emailRegex.test(emailCliente)) {
            clienteValido = false;
        }
        //Validación del teléfono (número de nueve digitos)
        const telefonoRegex = /^\d{9}$/;
        if (!telefonoRegex.test(telefonoCliente)) {
            clienteValido = false;
        }
        //Validación de la empresa (nombre cualquiera con espacios)
        const empresaRegex = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/
        if (!empresaRegex.test(empresaCliente)) {
            clienteValido = false;
        }
        return clienteValido;
    }


    function añadirCliente(e) {
        e.preventDefault()
        const nombreCliente = document.querySelector("#nombre").value;
        const emailCliente = document.querySelector("#email").value;
        const telefonoCliente = document.querySelector("#telefono").value;
        const empresaCliente = document.querySelector("#empresa").value;

        if (validarCliente(nombreCliente, emailCliente, telefonoCliente, empresaCliente)) {
            let objetoCliente = {
                nombre: nombreCliente,
                email: emailCliente,
                telefono: telefonoCliente,
                empresa: empresaCliente
            };
        }
    }
    document.getElementById("formulario").addEventListener("submit", añadirCliente);
})

