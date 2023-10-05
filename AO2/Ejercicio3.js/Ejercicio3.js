const array = [[5, 4, 6], [2, 9, 3], [8, 1, 7]];
const aplanada = []
for(i=0;i<10;i++){  
    for (fila of array){
        for (columna of fila){
            if (i==columna){
                 aplanada.push(columna);
            }
       }
    }
}
alert(aplanada);