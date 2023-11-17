
export const saldo = 200;

/*
(function(){
    window.nombreCliente = "Pepe"
})()
*/
export const nombreCliente = "Pepe";

function mostrarInformacion (nombre, saldo){
    return `${nombre}${saldo}`;
}

export class Cliente{
    constructor (nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
     mostrarInformacion(){
        return `${this.nombre}${this.saldo}`;
    }
}