// app.js
import { iniciarDB } from './db.js';
import { validarFormulario, campoActivo, comprobarFormulario, añadirCliente, camposFormulario } from './nuevocliente.js';
//Expresiones regulares
iniciarDB();
    //Obtenemos los campos del html
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const empresa = document.getElementById("empresa");
    const boton = document.getElementById("boton");
    

    
    //Si todas se asigan true se puede enviar el formulario (ref en const validarFormulario y limpiarFormulario())
    let nombreValido = false;
    let emailValido = false;
    let telefonoValido = false;
    let empresaValido = false;
    
    boton.disabled = false;
    boton.classList.add('opacity-50');
document.addEventListener("DOMContentLoaded", function() {
    

  camposFormulario();
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
});