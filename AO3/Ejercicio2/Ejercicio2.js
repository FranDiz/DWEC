var resultados=[0,0,0,0,0,0,0,0,0,0,0];
for (i=0;i<36000;i++){
    var dado1 = Math.floor(Math.random()*6)+1;
    var dado2 = Math.floor(Math.random()*6)+1;
    var suma = dado1+dado2;
    resultados[suma-2]++;
}
