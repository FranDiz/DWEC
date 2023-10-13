function reloj(){
    //obtenemos la hora actual
    const tiempo = new Date();
    let hora = tiempo.getHours();
    let minutos =  tiempo.getMinutes();
    let segundos = tiempo.getSeconds();
    let ampm = "AM";

    //funcionamiento de la hora
    if (hora>=12){
        ampm = "PM";
        hora-=12;
    }
    if (minutos>60){
        hora+=1;
        minutos=0;
    }
    if(segundos>60){
        minutos+=1;
        segundos=0;
    }
    //div del reloj
    var textoTiempo = document.getElementById("horaActual");
    textoTiempo.textContent = `${hora}:${minutos}:${segundos}${ampm}`
}
reloj();
//para que se refresque cada segundo
setInterval(reloj, 1000);