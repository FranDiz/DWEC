document.addEventListener("DOMContentLoaded", function() {
    
    //Creación BBDD
    let baseIndex = indexedDB.open("bbdd",1)
    baseIndex.createObjectStore ("clientes", {keyPath: 'id'})
    let clientes = transaction.objectStore("clientes");
    
    
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
            }
            clientes.add(objetoCliente)
        }
    }
    document.getElementById("formulario").addEventListener("submit", añadirCliente);
    
    })