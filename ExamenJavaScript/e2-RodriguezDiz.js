function findPairs(n1,n2){
    let array = []; 
    while (true){
        if (isNaN(n1)||isNaN(n2)){
            alert("Número no válido ");
            break;
        }
            n1=Number.parseInt(n1);
            n2=Number.parseInt(n2);
        if (n1<1 || n2>100) {
            alert("Número no válido ");
            break;
        }
        for (n1; n1<n2;n1++){
            if (n1%2 == 0){
                array.push(n1);
            }

        }
        var mensaje = "";
    array.forEach(element => {
        mensaje+=element + ",";
    });
    alert(mensaje);
        break;
        
    }
    
}
findPairs(2,99);