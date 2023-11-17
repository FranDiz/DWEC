import PrintName, {Cliente, nombreCliente, saldo, Empresa }  from "./cliente.js"

console.log(nombreCliente);
console.log(saldo);


console.log(mostrarInformacion(nombreCliente,saldo));

let cliente = new Cliente(nombreCliente, saldo);
console.log(Cliente);
console.log(cliente.mostrarInformacion);

let empresa = new Empresa("IES", 200, "Verde");
console.log(empresa);

PrintName();