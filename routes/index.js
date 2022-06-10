const routes = require('express').Router();

routes.get('/', (req, res) => {
        res.send("You've been servered, Ames Gusa!!!!");
       
    });

routes.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/test.html");
    });

module.exports= routes;