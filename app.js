const express = require('express')
const app = express()

let index = require('./routes/index')

app.use('/', index)

app.listen(3000)
