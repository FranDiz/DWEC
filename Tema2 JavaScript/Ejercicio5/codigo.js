var valores=[true, 5, false, "hola", "adios", 2];
var texto=""
for (var i=0;i<valores.length;i++){
    if (valores[i].length>texto.length){
        texto = valores[i];
    }
    if (valores[i]){
        console.log("true");
    } else{
        console.log("false");
    }
    
}
let suma = valores[1]+valores[5]
let resta = valores[1]-valores[5]
let multiplicacion= valores[1]*valores[5]
let division = valores[1]/valores[5]
console.log('suma ' + suma)
console.log('resta '+ resta)
console.log('multiplicacion '+ multiplicacion)
console.log('division '+ division)
console.log(texto)