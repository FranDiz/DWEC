const campoCorreo = document.querySelector(".correo");
document.addEventListener("DOMContentLoaded", function() {
    obtenerEmail()
});



//Obtiene la clave del email que se va a abrir
function obtenerEmail(){
    let keys = Object.keys(localStorage)
    for (let key of keys){
        if (key !== 'abierto'){
            continue;
        }
        let idCorreo = localStorage.getItem(key)
        console.log(key)
        correoAbierto(idCorreo)
    }
}



function correoAbierto(idCorreo){
    let keys = Object.keys(localStorage)
    for (let key of keys){
        if (key === idCorreo){
            var correo = localStorage.getItem(key)
            const objetoCorreo = JSON.parse(correo)

            // Crear elementos con estilos
            const emailElement = document.createElement("div");
            emailElement.textContent = "Email: " + objetoCorreo.email;
            emailElement.style.padding = "10px";
            emailElement.style.border = "1px solid #ccc";

            const asuntoElement = document.createElement("div");
            asuntoElement.textContent = "Asunto: " + objetoCorreo.asunto;
            asuntoElement.style.padding = "10px";
            asuntoElement.style.border = "1px solid #ccc";

            const mensajeElement = document.createElement("div");
            mensajeElement.textContent = "Mensaje: " + objetoCorreo.mensaje;
            mensajeElement.style.padding = "10px";
            mensajeElement.style.border = "1px solid #ccc";

            // Agrega los elementos al campoCorreo
            campoCorreo.appendChild(emailElement);
            campoCorreo.appendChild(asuntoElement);
            campoCorreo.appendChild(mensajeElement);
        }
    }
}
