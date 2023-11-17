//API Notificaciones

const notificarBTN = document.querySelector("#notificar");
notificarBTN.addEventListener("click", ()=> {
    Notification.requestPermission().then((resultado)=> {
        console.log("El resultado es", resultado)
    })
})

const verNotificacionBTN = document.querySelector("#verNotificacion");
verNotificacionBTN.addEventListener("click", ()=> {
    if (Notification.permission === "granted"){
        const notificacion = new Notification("Esta es mi notificacion", {icon:"img/descarga.png", body:"Lectures"});

        notificacion.onclick = function(){
            window.open("link")
        }
    }
})