const radio = prompt("Introduce el valor de un radio");
window.alert(radio + "cm" + "  " + radio*2 + "cm" + "  " + (Math.PI*radio*2).toFixed(2)+"cm" + "  " + (Math.PI*radio*radio).toFixed(2) + "cm²"
 + "  " + (4*Math.PI*radio*radio).toFixed(2) +"cm²" + "  " + ((4/3)*Math.PI*radio*radio*radio).toFixed(2) + "cm³");