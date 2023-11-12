import { iniciarDB, añadirDB } from "./db.js";
iniciarDB();
    //Obtenemos los campos del html
    export const camposFormulario = () => {
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
    }
    //Base de datos IndexedDB

    
    
    //Validacion de los campos del formulario
    export const validarFormulario = (e) => {
        const nombreRegex = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/; //Solo letras incluyendo espacio entre estas
        const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;//Formato 'correo@gmail.com' y parecidos
        const telefonoRegex = /^\d{9}$/;//Valor numérico de 9 dígitos
        const empresaRegex = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;//Solo letras incluyendo espacio entre estos
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
    
    export function crearError(e){
        const error = document.createElement('P');
        error.textContent = `El campo ${e.target.name} es inválido`;
        error.classList.add('error', 'bg-red-600', 'text-white', 'p-2', 'text-center');
        e.target.insertAdjacentElement('afterend',error);
    }
    export function crearValido(e){
        const valido = document.createElement('P');
        valido.textContent = `El campo ${e.target.name} es válido`;
        valido.classList.add('valido','bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
        e.target.insertAdjacentElement('afterend', valido);
    }
    
    export function borrarMensaje(e){
        const errorExistente = e.target.parentElement.querySelector('.error');
        if(errorExistente){
            errorExistente.remove();
        }
        const validoExistente = e.target.parentElement.querySelector('.valido');
        if (validoExistente){
            validoExistente.remove();
        }
    }
    
    export const campoActivo = (e) => {
        e.target.style.border="blue 4px solid";
    }
    
    
    //Si todos los campos son validados se habilita el botón
    export function comprobarFormulario(){
        if(nombreValido && emailValido && telefonoValido && empresaValido){
            boton.disabled = false;
            boton.classList.remove('opacity-50');
        }else{
            boton.disabled = true;
            boton.classList.add('opacity-50');
        }
    }
    
    //Restaura el formulario
    export function limpiarFormulario(){
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
    export function añadirCliente(e) {
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
        añadirDB(cliente);
        limpiarFormulario();
        
    
      }
    