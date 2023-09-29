var palabra = "yo hago yoga hoy"

var palindromo = ""
for (var i = palabra.length; i>=0;){
    console.log(palabra[i]);
    i-=1
    palindromo+=palabra[i]
}
if (palindromo==palabra){
    console.log("Es palindroma");
}    else{ 
    console.log("No es palindroma");
}