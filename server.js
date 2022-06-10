const express = require('express');
const connectDB = require('./db/connection');
const app = express();

connectDB();

app.use('/api/userModel',  require('../api/user'));
const port = process.env.PORT || 3000;


app.use('/', require('./routes'));

app.listen(port, () => {
    console.log(`Example app listening port ${port}`);
})