document.addEventListener("DOMContentLoaded", function() {

    //Creación BBDD
    let db;
    let request = indexedDB.open("bbdd", 1);

    request.onupgradeneeded = function(event) {
        db = event.target.result;
        db.createObjectStore("clientes", {keyPath: 'id', autoIncrement: true});
    };

    request.onsuccess = function(event) {
        db = event.target.result;
        document.getElementById("formulario").addEventListener("submit", añadirCliente);
    };

    request.onerror = function(event) {
        console.log("Error opening database", event);
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

    function logClients() {
        let transaction = db.transaction(["clientes"], "readonly");
        let objectStore = transaction.objectStore("clientes");

        objectStore.openCursor().onsuccess = function(event) {
            let cursor = event.target.result;
            if (cursor) {
                console.log(cursor.value);
                cursor.continue();
            } else {
                console.log('No more entries!');
            }
        };
    }

    function añadirCliente(e){
        e.preventDefault()

        //Campos del formulario
        const nombreCliente = document.querySelector("#nombre").value;
        const emailCliente = document.querySelector("#email").value;
        const telefonoCliente = document.querySelector("#telefono").value;
        const empresaCliente = document.querySelector("#empresa").value;

        if (validarCliente(nombreCliente, emailCliente, telefonoCliente, empresaCliente)){
            let objetoCliente = {
                nombre: nombreCliente,
                email: emailCliente,
                telefono: telefonoCliente,
                empresa: empresaCliente
            }
            let transaction = db.transaction(["clientes"], "readwrite");
            let objectStore = transaction.objectStore("clientes");
            objectStore.add(objetoCliente).onsuccess = function() {
                logClients();
            };
        }
    }

    document.getElementById("formulario").addEventListener("submit", añadirCliente);
})