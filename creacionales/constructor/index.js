/* Old way before ECMA6 */
/* function MiClase() {
    this.prop = 1;
    this.met = () => {};
}

const instancia = new MiClase();
console.log(instancia); */

class MiClase {
    constructor({p1, p2, p3}) {
        this.propiedad1 = p1;
        this.propiedad2 = p2;
        this.propiedad3 = p3;
        this.metodo = () => {
            /* Soy un método */
        };
    }
}
const propValues = {p1: 1, p2:5, p3: 9};
const instancia = new MiClase(propValues);
console.log(instancia);
