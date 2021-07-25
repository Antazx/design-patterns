function* iterador(cadena){
    let nextIndex = 0;
    while(nextIndex < cadena.length) {
        yield cadena[nextIndex++];
    }
}

const texto = "Mi nombre es Guillermo Anta";
const generador = iterador(texto);

let ended = false;
while(!ended){
    let {value, done} = generador.next();
    console.log(value);
    ended = done;
}