const tablaEnviados = document.querySelector("#lista-emails")

document.addEventListener("DOMContentLoaded", function(){
    let listado = []
    listaEmails(listado)
    emailsHTML(listado)
    tablaEnviados.addEventListener('click', function(e){
        const idObtenida = e.target.getAttribute("data-id")
        localStorage.setItem('abierto',idObtenida)
        window.open('correo.html', '_blank')
    })
})

//Clasifica las keys para solo seleccionar ID de correos
function listaEmails(array){
    let keys = Object.keys(localStorage)
    for (let key of keys){
        if (isNaN(key)){
            continue;
        }
        let objeto = localStorage.getItem(key)
        array.push(objeto)
    }
}
 

//Añade los campos de los correos a la tabla
function emailsHTML(array) {
    array.forEach(mail => {
        const objetoMail = JSON.parse(mail);

        if (objetoMail) {
            var fila = tablaEnviados.insertRow();
            var celdaEmail = fila.insertCell(0);
            var celdaAsunto = fila.insertCell(1);
            var celdaBoton = fila.insertCell(2);

            celdaEmail.innerHTML = objetoMail.email;
            celdaAsunto.innerHTML = objetoMail.asunto;
            celdaBoton.innerHTML = `
            <button id="boton" class="bg-green-500 text-white rounded-full p-2 focus:outline-none" data-id=${objetoMail.id}>
            `
        } else {
            console.log("El objeto para la clave " + objetoMail + " no existe en el localStorage.");
        }
    });
}
