var array = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
var valido = true;
var n = prompt("Introduce el número del DNI");
while (valido){
    if(n.length!=8 || isNaN(n)){
        alert("Número no válido");
        valido=false;
    }
    if (n>0 && n<99999999){
        var letra = n%23;
        alert(n+array[letra]);
        valido=false;
    }
}
