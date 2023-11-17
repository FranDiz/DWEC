const salida = document.querySelector("#salida");
const microfono = document.querySelector("#microfono")

microfono.addEventListener("click", ejecutarSpeechAPI)

function ejecutarSpeechAPI(){
    const SpeechRecognition = webkitSpeechRecognition
    const recognition = new SpeechRecognition

    recognition.start()

    recognition.onstart = function(){
        salida.classList.add("mostrar")
        salida.innerHTML = "Escuchando..."
    }
    recognition.onspeechend = function(){
        salida.innerHTML = "Se detuvo de ejecutar"
        recognition.stop()
    }
    recognition.onresult = function(e){
        console.log(e.results)
    }

    const transcript = e.results[0][0].transcript
    const speech = document.createElement("p")
    speech.innerHTML = `Grabado: ${transcript}`

    salida.appendChild(speech)
}