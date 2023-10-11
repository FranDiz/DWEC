const nombre = prompt("Introduce tus nombres y apellidos");
var lennombre = 0
for (i=0; i<nombre.length;i++){
    if  (nombre[i]!=" "){
        lennombre+=1;
    }
}
alert(nombre.toLowerCase() + " "+ nombre.toUpperCase());
const array=nombre.split(" ");
