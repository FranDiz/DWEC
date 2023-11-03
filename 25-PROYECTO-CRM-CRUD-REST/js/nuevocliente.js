document.addEventListener("DOMContentLoaded", function() {

    const nombre = document.querySelector("#nombre");
    const email = document.querySelector("#email");
    const telefono = document.querySelector("#telefono");
    const empresa = document.querySelector("#empresa");
    const formulario = document.querySelector("#formulario");

    nombre.addEventListener("blur", validar);
    email.addEventListener("blur", validar);
    telefono.addEventListener("blur", validar);
    empresa.addEventListener("blur", validar);

        function validar(e) {
            if (e.target.value.trim() === "") {

            mostraAlerta(`El campo ${e.target.id} es obligatorio`);
    
            } else {
                console.log("Ha pasado la validación");
            }
        }

      function mostraAlerta(mensaje){
        const error = document.createElement("P");
        error.textContent = mensaje;
        error.classList.add("bg-red-600", "text-center", "text-white", "p-2");
        formulario.appendChild(error);
      }


    function validarCliente(nombreCliente, emailCliente, telefonoCliente, empresaCliente){
        let clienteValido = true;
        //Validación del nombre
        const nombreRegex = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/
        if (!nombreRegex.test(nombreCliente)){
            clienteValido = false;
        }
        //Validación del email
        const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        if (!emailRegex.test(emailCliente)){
            clienteValido = false;
        }
        //Validación del teléfono
        const telefonoRegex = /^\d{9}$/;
        if (!telefonoRegex.test(telefonoCliente)){
            clienteValido = false;
        }
        //Validación de la empresa
        const empresaRegex = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/
        if (!empresaRegex.test(empresaCliente)){
            clienteValido = false;
        }
        return clienteValido;
    }
    

    function añadirCliente(e){
        e.preventDefault()
        const nombreCliente = document.querySelector("#nombre").value;
        const emailCliente = document.querySelector("#email").value;
        const telefonoCliente = document.querySelector("#telefono").value;
        const empresaCliente = document.querySelector("#empresa").value;
        
        if (validarCliente(nombreCliente, emailCliente, telefonoCliente, empresaCliente)){
            let objetoCliente = {
                nombre:nombreCliente,
                email:emailCliente,
                telefono:telefonoCliente,
                empresa:empresaCliente
            };
        }
    }
    document.getElementById("formulario").addEventListener("submit", añadirCliente);
    })