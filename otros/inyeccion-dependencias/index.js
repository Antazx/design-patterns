

//El problema por ejemplo es que queremos mover la funcionalidad ejecutada en las rutas de nuestra app a otro archivo para simplificar el código, pero esta funcionalidad depende de librerias como por ejemplo axios, esto nos forzaría a tener que importar esta funcionalidad en otros archivos, para evitarlo podemos realizar una inyección de dependencias:

//En el archivo index.js

const express = blablabla;
const app = express();
const axios = require;

//Tenemos esto
app.get('/users', (request, response) => {
    const {data} = await axios.get('some.url.com');
    response.send(data);
});

//Queremos algo como esto
const {getUsersFromUrl} = require('./handlers.js');
app.get('/users', getUsersFromUrl);

//En el archivo handlers.js para evitar tener que importar axios podemos inyecctarlo como dependencia

module.exports.get = (axios) => (request, response) => {
    const {data} = await axios.get('some.url.com');
    response.send(data);
}
