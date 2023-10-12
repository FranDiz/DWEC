const fecha = prompt("Introduce una fecha en formato YYYY-MM-DD");
const date = new Date(fecha);
const dia = date.get();
console.log(`${dia}`);