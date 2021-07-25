class Sum {
    constructor(v = 0) {
        this.value = v;
    }

    suma(v) {
        this.value += v;
        return this;
    }
}

const valor = new Sum();
console.log(valor.suma(1).suma(2).suma(4).value);