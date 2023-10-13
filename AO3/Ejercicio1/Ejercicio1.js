var n = prompt("Introduce cuantos bauuuba quieres");
    //Si no es valor númerico no muestra bauubas
if (isNaN(n)){
    document.write("Has introducido un valor invalido");
}else{
    for (i=0;i<n;i++){
        document.write("bauuuba ");
    }
}