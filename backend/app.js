const express = require('express')
const app = express()

app.use(express.json())

// Importación de las rutas.
//const book = require('./routes/BookRoute')

//app.use('/api/v2', book)

module.exports = app