document.addEventListener("DOMContentLoaded", function() {
    //pedimos el radio y comprobamos si es un valor numérico
    let r = prompt("Introduce el radio de la circunferencia");
    if (!isNaN(r)){
        document.write(`Radio: ${r}cm, Diámetro: ${r*2}cm, Perímetro: ${(Math.PI*r*2).toFixed(2)}cm², Área: ${(Math.PI*r*r).toFixed(2)}cm², Área esfera: ${(4*Math.PI*r*r).toFixed(2)}², Volumen esfera: ${((4/3)*Math.PI*r*r*r).toFixed(2)}cm³`);
    }else{
        document.write("Dato no válido");
    }
});
