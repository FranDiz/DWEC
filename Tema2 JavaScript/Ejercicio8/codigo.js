var palabra = "yo hago yoga hoy"
var espacios = palabra.replace(/[\W_]/g, "").toLowerCase();
var palindromo = espacios.split("").reverse().join("");
if (palabra == palindromo){
    console.log("Es palíndroma")
}else{
    console.log("No es palíndroma")
}