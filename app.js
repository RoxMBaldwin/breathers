const express = require('express')
// const bodyParser = require('body-parser')

const routes = require('./routes/breather_maslow.js')

const cors = require('cors')

const app = express()

const port = 4000

// app.use(bodyParser.json())
app.use(cors())
app.use('/', routes)



app.listen(port)
