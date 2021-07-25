//Herencia
/* class Persona {
    constructor() {
        this.nombre = 'Guillermo';
    }

    saludar() {
        console.log(`Hola soy ${this.nombre}`);
    }
}

class Perro extends Persona {
    this.raza
} */

//Composicion

const saludar = name => console.log(`Hola! soy ${name}`);

const persona = {
    nombre: 'Guillermo',
    saludar: function() { saludar(this.nombre)}
}

persona.saludar();