const express = require('express')
const app = express()
const port = 3000


app.use('/', require('./routes'))

// app.get('/', (req, res) => {
//     res.send("You've been servered, Ames Gusa!")
// })

app.listen(port, () => {
    console.log(`Example app listening port ${port}`)
})