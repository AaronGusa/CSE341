const mongoose = require('mongoose');

const user = new mongoose.Schema({
    fName:{
        type: String
    },
    lName: {
        type: String
    }
});

module.exports = User = mongoose.model('user', user);