document.addEventListener("DOMContentLoaded", function() {
    
    //Creación BBDD
    let db
    let baseIndex = indexedDB.open("bbdd",1)
    baseIndex.onupgradeneeded = function(e){
        db = e.target.result;
        db.createObjectStore ("clientes", {keyPath: 'id',autoIncrement: true});
    };
    
    baseIndex.onsuccess = function(e) {
        db = e.target.result;
    };

    baseIndex.onerror = function(e) {
        console.log('Error al abrir/acceder a la base de datos IndexedDB');
    };
    
    



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
            let transaccion = db.transaction("clientes", "readwrite");
            let clientes = transaccion.objectStore("clientes");
            let añadir = clientes.add(objetoCliente)
            añadir.onsuccess = function(){
                console.log('Cliente añadido');
            }
            añadir.onerror = function(){
                console.log('Error al añadir');
            };
        }
    }
    document.getElementById("formulario").addEventListener("submit", añadirCliente);
    
    })