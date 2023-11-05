document.addEventListener("DOMContentLoaded", function() {

//Obtenemos los campos del html
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const empresa = document.getElementById("empresa");
const boton = document.getElementById("boton");

//Expresiones regulares
const nombreRegex = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const telefonoRegex = /^\d{9}$/;
const empresaRegex = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;

//Si todas se asigan true se puede enviar el formulario (ref en const validarFormulario y limpiarFormulario())
let nombreValido = false;
let emailValido = false;
let telefonoValido = false;
let empresaValido = false;

boton.disabled = false;
boton.classList.add('opacity-50');

//Base de datos IndexedDB
let db
let request = window.indexedDB.open("MyDatabase", 1);
request.onupgradeneeded = function(event) { 
  db = event.target.result;
  let objectStore = db.createObjectStore("formObjects", { autoIncrement : true });
};

request.onsuccess = function(event) {
  db = request.result;
};

request.onerror = function(event) {
  console.log("Error al abrir la base de datos", event);
};



//Validacion de los campos del formulario
const validarFormulario = (e) => {
    e.target.style.border="none";
    switch(e.target.name){
        case "nombre":
            console.log("1");
            borrarMensaje(e);
            if (!nombreRegex.test(e.target.value)){
                crearError(e);
                nombreValido = false;
            }else{
                crearValido(e);
                nombreValido = true;
        }
        break;
        case "email":
            console.log("2");
            console.log(nombreRegex.test("a"));
            borrarMensaje(e);
            if (!emailRegex.test(e.target.value)){
                crearError(e);
                emailValido = false;
            }else{
                crearValido(e);
                emailValido = true;
        }
        break;
        case "telefono":
            borrarMensaje(e);
            if (!telefonoRegex.test(e.target.value)){
                crearError(e);
                telefonoValido = false;
            }else{
                crearValido(e);
                telefonoValido = true;
        }
        break;
        case "empresa":
            borrarMensaje(e);
            if (!empresaRegex.test(e.target.value)){
                crearError(e);
                empresaValido = false;
            }else{
                crearValido(e);
                empresaValido = true;
        }
        break;
    }
}

function crearError(e){
    const error = document.createElement('P');
    error.textContent = `El campo ${e.target.name} es inválido`;
    error.classList.add('error', 'bg-red-600', 'text-white', 'p-2', 'text-center');
    e.target.insertAdjacentElement('afterend',error);
}
function crearValido(e){
    const valido = document.createElement('P');
    valido.textContent = `El campo ${e.target.name} es válido`;
    valido.classList.add('valido','bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
    e.target.insertAdjacentElement('afterend', valido);
}

function borrarMensaje(e){
    const errorExistente = e.target.parentElement.querySelector('.error');
    if(errorExistente){
        errorExistente.remove();
    }
    const validoExistente = e.target.parentElement.querySelector('.valido');
    if (validoExistente){
        validoExistente.remove();
    }
}

const campoActivo = (e) => {
    e.target.style.border="blue 4px solid";
}


//Si todos los campos son validados se habilita el botón
function comprobarFormulario(){
    if(nombreValido && emailValido && telefonoValido && empresaValido){
        boton.disabled = false;
        boton.classList.remove('opacity-50');
    }else{
        boton.disabled = true;
        boton.classList.add('opacity-50');
    }
}

//Restaura el formulario
function limpiarFormulario(){
    nombre.value='';
    nombreValido = false
    email.value='';
    emailValido = false;
    telefono.value='';
    telefonoValido = false;
    empresa.value='';
    empresaValido = false;

}

//Lógica al añadirCliente a la indexedDB. 
function añadirCliente(e) {
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let empresa = document.getElementById("empresa").value;
    let cliente = {
        nombreCliente: nombre,
        emailCliente: email,
        telefonoCliente: telefono,
        empresaCliente: empresa
    };
  
    let transaction = db.transaction(["formObjects"], "readwrite");
    let objectStore = transaction.objectStore("formObjects");
    let request = objectStore.add(cliente);
  
    request.onsuccess = function(e) {
      console.log("Datos agregados a la base de datos");
      limpiarFormulario();
    };
  
    request.onerror = function(e) {
      console.log("Error al agregar datos", e);
    };

  }

nombre.addEventListener("blur", validarFormulario);
nombre.addEventListener("focus", campoActivo);
email.addEventListener("blur", validarFormulario);
email.addEventListener("focus", campoActivo);
telefono.addEventListener("blur", validarFormulario);
telefono.addEventListener("focus", campoActivo);
empresa.addEventListener("blur", validarFormulario);
empresa.addEventListener("focus", campoActivo);
boton.addEventListener("mouseover", comprobarFormulario);
document.querySelector('form').addEventListener("submit", añadirCliente);

/*
function validarCliente(e){
    e.preventDefault()
    let clienteValido = true;
    //Validación del nombre
    
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
*/
})