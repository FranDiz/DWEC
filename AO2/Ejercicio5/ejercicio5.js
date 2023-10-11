/*
function init(){
    let o1 = document.createElement("ol");
    let li1 = document.createElement("li");
    let li1Texto = document.createTextNode("Elemento ordenado 1");
    let li1Desc = HTMLDetailsElement("Receta número 1")
    li1.appendChild(li1Texto);
    li1.appendChild(li1Desc);
    o1.appendChild(li1);
    
    document.body.appendChild(o1);
    document.write(o1);
    
}

window.onload = init;
*/

function init() {
 
    let elementsOL = [
        "Elemento ordenado 1",
        "Elemento ordenado 2",
        "Elemento ordenado 3"
    ]
 
    let ol = createOL(elementsOL);
 
    document.body.getElementById("ol");
    
 
}
 
 
window.onload = addElement;

document.body.onload = addElement;

function addElement() {
  // crea un nuevo div
  // y añade contenido
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("Hola!¿Qué tal?");
  newDiv.appendChild(newContent); //añade texto al div creado.

  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
