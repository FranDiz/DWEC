let nombre = prompt("Introduce nombre de usuario");
let hora = prompt("Introduce la hora del dia");


if (hora>=8 && hora<14){
    alert(`Buenos días ${nombre}`)
} else if (hora>=14 && hora<20){
    alert(`Buenas tardes ${nombre}`)
}else if (hora>=20 && hora<8){
    alert(`Buenas noches ${nombre}`)
}