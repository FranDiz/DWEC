class Persona{
    constructor(id, nombre, apellidos, fecha_nacimiento){
        if (typeof id !== 'int' || typeof nombre !== 'string' || typeof apellidos !== 'string' || typeof fecha_nacimiento !== 'date') {
            throw console.error("Datos incorrectos");
        }
        this.id=id;
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.fecha_nacimiento=fecha_nacimiento;
    }
    concentrarse(){
        return "concentrado";
    }
}
class CEO extends Persona{
    constructor(id, nombre, apellidos, fecha_nacimiento, jefes_asignados){
        if (!Array.isArray(jefes_asignados)) {
            throw console.error('Los jefes deben ser almacenados en array')
        }
        super(id, nombre, apellidos, fecha_nacimiento);
        this.jefes_asignados = jefes_asignados;
    }
    viajar(){
        return "¿A qué destino desea viajar"
    }

}