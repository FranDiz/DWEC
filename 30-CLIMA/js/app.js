const ciudad = document.querySelector("#ciudad")
const pais = document.querySelector("#pais")
const boton = document.querySelector("submit")
const formulario = document.querySelector("#formulario")
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", enviarFormulario)
ciudad.addEventListener("blur", campoInvalido)

function enviarFormulario(e) {
    e.preventDefault()
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad.value},${pais.value}&appid=e1e1afb71c313ba74717e47741f02998`
    fetch(url)
        .then(data => data.json())
        .then(data => console.log(data))
        .then(data => {
            mostrarClima(data)
        })
}

function campoInvalido(e) {
    e.preventDefault();
    const errorExistente = e.target.parentElement.querySelector('.error');
    if (errorExistente) {
        errorExistente.remove()
    }
    if (e.target.value === '') {
        let error = document.createElement("p")
        error.textContent = "El campo ciudad esta vacío"
        error.classList.add('error', 'bg-red-600', 'text-white', 'p-2', 'text-center');
        e.target.insertAdjacentElement('afterend', error);
    }
}

function mostrarClima(clima) {
    const {
        ,
        main: { temp, temp_max, temp_min },
    } = clima;

    const temperatura = kelvintoCentigrados(temp);
    const max = kelvintoCentigrados(temp_max);
    const min = kelvintoCentigrados(temp_min);

    const nombreCiudad = document.createElement("p");
    nombreCiudad.textContent = `Clima en ${name}`;
    nombreCiudad.classList.add("font-bold", "text-2xl");

    const actual = document.createElement("p");
    actual.innerHTML = `${temperatura} &#8451;`;
    actual.classList.add("font-bold", "text-6xl");

    const tempMaxima = document.createElement("p");
    tempMaxima.innerHTML = `Max: ${max} &#8451;`;
    tempMaxima.classList.add("text-xl");

    const tempMinima = document.createElement("p");
    tempMinima.innerHTML = `Min: ${min} &#8451;`;
    tempMinima.classList.add("text-xl");

    const resultadoDiv = document.createElement("div");
    resultadoDiv.classList.add("text-center", "text-white");
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMaxima);
    resultadoDiv.appendChild(tempMinima);

    resultado.appendChild(resultadoDiv);
}
