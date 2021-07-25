const axios = require('axios');

const instance = axios.create({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
});

module.exports = instance;