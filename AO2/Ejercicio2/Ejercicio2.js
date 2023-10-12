const nombre = prompt("Introduce tus nombres y apellidos");
var lennombre = 0
for (i=0; i<nombre.length;i++){
    if  (nombre[i]!=" "){
        lennombre+=1;
    }
}
alert(nombre.toLowerCase() + " "+ nombre.toUpperCase());
const array=nombre.split(" "); 
var usuario= array[0].slice(0,1) + array[1] + array[2].slice(0,1);
console.log(usuario);
var inicialNombre = array[0].charAt(0).toUpperCase();
var mayusNombre = inicialNombre + array[0].slice(1,3);
var usuario2 = mayusNombre + array[1].slice(0,3) + array[2].slice(0,3);
console.log(usuario2);