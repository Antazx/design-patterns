/* class Macbook {
    constructor() {
        this.precio = 1000;
        this.pantalla = 13.6;
    }
}

const macbook = new Macbook();

macbook.agregarMemoria = function() {
    this.precio += 399;
}
macbook.agregarMemoria(); */

class Macbook {
    precio() {return 1000;}
}

const agregarMemoria = macbook => {
    const oldPrice = macbook.precio();
    macbook.precio = function() {
        return oldPrice + 399
    }
}
const macbook = new Macbook();
agregarMemoria(macbook);
console.log(macbook.precio());