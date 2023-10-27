document.addEventListener("DOMContentLoaded", function() {
    const misMensajes = document.getElementById("lista-mensajes");
    const textareaElement = document.getElementById("mensaje");
    const boton = document.querySelector(".button");

    // Cargar mensajes desde localStorage si existen
    if (localStorage.getItem("mensajes")) {
        misMensajes.innerHTML = localStorage.getItem("mensajes");
    }

    // Función para agregar un mensaje
    function agregarMensaje(mensaje) {
        const nuevoMensaje = document.createElement("div");
        nuevoMensaje.textContent = mensaje;
        
        // Crear el botón de eliminar
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", function() {
            // Eliminar el mensaje del localStorage
            const mensajesActuales = localStorage.getItem("mensajes").split(',');
            const mensajeAEliminar = nuevoMensaje.textContent;
            const nuevosMensajes = mensajesActuales.filter(mensaje => mensaje.trim() !== mensajeAEliminar.trim());
            localStorage.setItem("mensajes", nuevosMensajes.join(','));

            // Eliminar el mensaje del DOM
            nuevoMensaje.remove();
        });

        // Agregar el botón eliminar al mensaje
        nuevoMensaje.appendChild(botonEliminar);

        // Agregar el mensaje al DOM
        misMensajes.appendChild(nuevoMensaje);
    }

    // Define la función que se ejecutará cuando se haga clic en el botón
    function handleClick(event) {
        event.preventDefault();
        const valorTextarea = textareaElement.value;

        // Agregar el mensaje al localStorage y al DOM
        if (valorTextarea.trim() !== "") {
            agregarMensaje(valorTextarea);
            // Guardar mensajes en localStorage
            const mensajesActuales = localStorage.getItem("mensajes") || "";
            localStorage.setItem("mensajes", mensajesActuales + valorTextarea + ",");
            textareaElement.value = "";
        }
    }

    // Asignar la función al evento 'submit' del formulario
    document.getElementById("formulario").addEventListener("submit", handleClick);
});
