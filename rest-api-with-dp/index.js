const express = require("express");
const app = express();
const port = 3000;

const services = require('./services');
const handlers = require('./handlers');

app.get("/", handlers(services).get);
app.listen(port, () => console.log(`Example app listening on port ${port}`));
