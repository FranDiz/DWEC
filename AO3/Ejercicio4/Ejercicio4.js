class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    //Retorna los datos de la persona
    getInfo() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Genero: ${this.genero}`;
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }
    //Devuelve true para matricularlo
    matriculado() {
        return true;
    }
}

class Profesor extends Persona {
    constructor(nombre, edad, genero, modulo, nivel){
        super(nombre, edad, genero);
        this.modulo=modulo;
        this.nivel=nivel;
    }
    //Se le da los valores a la funcion y los asigna al objeto
    imparte(mod, niv){
        this.modulo=mod;
        this.nivel=niv;
    }
}


// Crear un objeto de la clase Persona
const persona1 = new Persona('Ana', 25, 'Femenino');
document.write(persona1.getInfo());

// Crear un objeto de la clase Estudiante
const estudiante1 = new Estudiante('Juan', 20, 'Masculino', 'Matemáticas', 'Grupo A');
document.write(estudiante1.getInfo());
document.write(estudiante1.matriculado());

// Crear un objeto de la clase Profesor
const profesor1 = new Profesor('Carlos', 35, 'Masculino', 'Matemáticas', 'Avanzado');
document.write(profesor1.getInfo());
document.write(profesor1.modulo);
document.write(profesor1.nivel);

// Cambiar el módulo y el nivel del profesor usando el método imparte()
profesor1.imparte('Física', 'Básico');
document.write(profesor1.modulo);
document.write(profesor1.nivel);
