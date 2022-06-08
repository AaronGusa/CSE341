const routes = require('express').Router();

routes.get('/', (req, res) => {
        res.send("You've been servered, Ames Gusa!");
    });

module.exports= routes;