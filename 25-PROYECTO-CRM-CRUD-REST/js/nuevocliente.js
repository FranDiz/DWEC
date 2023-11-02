document.addEventListener("DOMContentLoaded", function() {

//Campos del formulario
const nombreCliente = document.querySelector("#nombre").value;
const emailCliente = document.querySelector("#email").value;
const telefonoCliente = document.querySelector("#telefono").value;
const empresaCliente = document.querySelector("#empresa").value;

//Creación BBDD
let baseIndex = indexedDB.open("bbdd",1)
baseIndex.createObjectStore ("clientes", {keyPath: 'id'})
let clientes = transaction.objectStore("clientes");


function validarCliente(e){
    e.preventDefault()
    const clienteValido = true;
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
    if (validarCliente){
        let objetoCliente = {
            nombre : nombreCliente,
            email : emailCliente,
            telefono : telefonoCliente,
            empresa : empresaCliente
        }
        clientes.add(objetoCliente)
    }
}
document.getElementById("formulario").addEventListener("submit", añadirCliente);

})