const resultados = new Map()
for(var i=2;i<=12;i++){
    resultados.set(i,0);
}
for (var i=0;i<36000;i++){
    var dado1 = Math.floor(Math.random()*7)+1;
    var dado2 = Math.floor(Math.random()*7)+1;
    var suma = dado1+dado2;
    for(let [key,value] of resultados  ){
        if (suma==key){
            resultados.set(key, value+1);
        }
    }
}
alert(resultados);