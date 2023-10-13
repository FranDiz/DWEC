function mostrarRecetas(){
    const recetas = ["Receta 1", "Receta 2", "Receta 3", "Receta 4"];
    var listaOrdenada = document.createElement("ol");
    
    //Crea la lista ordenada a partir del array
    for (i=0;i<recetas.length;i++){
        var receta = document.createElement("li");
        receta.textContent = recetas[i];
    
        var instrucciones = document.createElement("details");
        var summary = document.createElement("summary");
        summary.textContent = "Instrucciones de la receta" + (i+1);
        instrucciones.appendChild(summary);
    
        receta.appendChild(instrucciones);
        listaOrdenada.appendChild(receta);
        
}
    //Boton para eliminar receta (no funciona porque altera el array pero no la lista)
    var inputEliminar = document.createElement("input");
        inputEliminar.type = "number";
        inputEliminar.placeholder = "NºReceta";
    var boton = document.createElement("button");
        boton.textContent = "Borrar receta";
        boton.onclick = recetas.splice(inputEliminar,1);
document.body.appendChild(listaOrdenada);
document.body.appendChild(inputEliminar);
document.body.appendChild(boton);
}

mostrarRecetas();