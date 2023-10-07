function repetir(n, result = "") {
    if (n === 0) {
        return result;
    } else {
        return repetir(n - 1, result + " bauuuba");
    }
}

const v = window.prompt("Introduce un número:");
const x = parseInt(v);

if (isNaN(x)) {
    window.alert('Valor inválido');
} else {
    window.alert(repetir(x));
}
