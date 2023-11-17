const ciudad = document.querySelector("#ciudad")
const pais = document.querySelector("#pais")
const boton = document.querySelector("submit")
const formulario = document.querySelector("#formulario")

formulario.addEventListener("submit",enviarFormulario)
ciudad.addEventListener("blur", crearError)

function enviarFormulario(e){
    e.preventDefault()
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad.value},${pais.value}&appid=e1e1afb71c313ba74717e47741f02998`
    fetch(url)
    .then(data => data.json())
    .then(data => console.log(data))
    .then(data => mostrarHTML())
}

function campoInvalido(e){
    e.preventDefault();
    const errorExistente = e.target.parentElement.querySelector('.error');
    if (errorExistente){
        errorExistente.remove()
    }
    if (e.target.value === ""){
        let error = document.createElement("p")
        error.textContent = "El campo ciudad esta vacío"
        error.classList.add('error', 'bg-red-600', 'text-white', 'p-2', 'text-center');
        e.target.insertAdjacentElement('afterend', error);
    }
}

function mostrarHTML(temp, tempMax, tempMin){
    const campo = document.createElement('p')
    campo.appendChild(temp)
    campo.appendChild(tempMax)
    campo.appendChild(tempMin)
}
