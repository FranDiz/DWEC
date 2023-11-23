const tablaEnviados = document.querySelector("#lista-emails tbody")


document.addEventListener("DOMContentLoaded", function(){
    let listado = []
    listaEmails(listado)

    emailsHTML(listado)
})

function listaEmails(array){
    let keys = Object.keys(localStorage)
    for (let key of keys){
        let objeto = localStorage.getItem(key)
        array.push(objeto)
        console.log(key)
    }
}
function emailsHTML(array){
    array.forEach(mail => {
        const objetoMail = mail
        const fila = document.createElement("tr")
        fila.innerHTML = `
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            ${objetoMail.asunto}
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            ${objetoMail.email}
                        </td>
                        <td>
                            <button class="bg-green-500 text-white rounded-full p-2 focus:outline-none">
                        </td>
        `
    });
}