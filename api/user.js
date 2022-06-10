const express = require('express');
const mongoose = require('mongoose');
const User = require('../db/user');
const route = express.Router();

route.post('/', async (req,res) => {
    const{fName,lName} = req.body;
    let user = {};
    user.fName = fName;
    user.lName = lName;
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
})

module.exports = route;