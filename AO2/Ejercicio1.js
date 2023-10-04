function repetir(n, result = "") {
    // Base case: when n is 0, return the result
    if (n === 0) {
        return result;
    } else {
        // Recursive case: call the function with n-1 and update the result
        return repetir(n - 1, result + " bauuuba");
    }
}
const v = window.prompt();
const x = parseInt(v);
if (typeof (x) != 'number'){
    window.alert('Valor inválido');
}else{
    window.alert(repetir(x));
}