const myFunction = (ruta, callBack) => {
    const resultado = computacionPesada();
    callBack(resultado);
}

myFunction('/users',(resultado) => {});

/* Es algo similar a: */ 
/* app.get("/users", (req, res) => {

}) */

/* El problema es que estamos pasando la funcionalidad como argumento y esto nos complica realizar test unitarios sobre esta funcionalidad, la buena práctica sería hacerlo de la siguiente forma */

const funcionalidad = resultado => {};
myFunction('/users', funcionalidad);