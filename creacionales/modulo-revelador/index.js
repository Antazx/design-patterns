const resultado = (() => {
    const x = {};
    return {
        getter: () => console.log(x),
        setter: (key, value) => (x[key] = value)
    };
})();

resultado.getter();
resultado.setter('y', 'value added from public setter');
resultado.getter();

/* Devuelve undefined */
console.log(resultado.x);