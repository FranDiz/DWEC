let nombre = prompt("Introduce tu nombre y apellidos");
let lennombre = 0;
    //pedimos el nombre y comprobamos si es un valor string
if (!isNaN(nombre)){
    document.getElementById("resultado").textContent = "Dato no válido";
} else {
    for (i = 0; i < nombre.length; i++) {
        if (nombre[i] != " ") {
            lennombre += 1;
        }
    }
    //creamos los nombres de usuario que pide el ejercicio
    const array = nombre.split(" ");
    var usuario = array[0].slice(0, 1) + array[1] + array[2].slice(0, 1);
    var inicialNombre = array[0].charAt(0).toUpperCase();
    var mayusNombre = inicialNombre + array[0].slice(1, 3);
    var usuario2 = document.createElement("p");
    usuario2.textContent =`${mayusNombre}${array[1].slice(0,3)}${array[2].slice(0,3)}`;
    //se muestra en el html mediante el uso de div 
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = `${lennombre}\n${nombre.toLowerCase()} ${nombre.toUpperCase()}\n${array[0]}\n${array[1]}\n${array[2]}\n${usuario}`;
    resultadoDiv.appendChild(usuario2);
}
