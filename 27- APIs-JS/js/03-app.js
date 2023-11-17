//Detectar si tenemos internet

const enLinea = navigator.onLine;

console.log(enLinea);


function updateNetState(){
    if (navigator.onLine){
        console.log("Estas online")
    }else{
        console.log("Parece  que la wifi")
    }
}

window.addEventListener("online", updateNetState)
window.addEventListener("offline", updateNetState)