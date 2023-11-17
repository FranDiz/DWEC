import { Cliente } from "./cliente.js";

export class Empresa extends Cliente{
    constructor(nombre, saldo, categoria){
        super(nombre,saldo)
        this.categoria=categoria;
    }
    mostrarInformacion(){
        return `${this.nombre}${this.saldo}${this.categoria}`
    }
}
export default function PrintName(){
    console.log("Exportacion default")
}