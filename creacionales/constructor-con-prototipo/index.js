class MiClase {
    constructor({ p1, p2, p3 }) {
        this.propiedad1 = p1;
        this.propiedad2 = p2;
        this.propiedad3 = p3;
    }
    /* Fuera del constructor */
    metodo = () => {
        /* Soy un método de prototipo */
    };
}
const propValues = { p1: 1, p2: 5, p3: 9 };
const instancia = new MiClase(propValues);
console.log(instancia);
/* Ya no se puede acceder al prototipo de esta manera, funciona en la consola del navegador*/
console.log(instancia.__proto__);
