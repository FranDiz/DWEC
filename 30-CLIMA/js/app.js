const ciudad = document.querySelector("#ciudad")
const pais = document.querySelector("#pais")
const boton = document.querySelector("submit")
const formulario = document.querySelector("#formulario")

formulario.addEventListener("submit",enviarFormulario)

function enviarFormulario(e){
    e.preventDefault()
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${ciudad.value}&lon=${pais.value}&appid=e1e1afb71c313ba74717e47741f02998`
    fetch(url)
    .then(data => data.json())
    .then(data => console.log(data))
}

function mostrarHTML(tempMax,tempMin,temp){
    
}