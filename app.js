const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./routes/breather_maslow.js')

const cors = require('cors')

const app = express()

const port = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors())
app.use('/', routes)

app.post('/', routes)


app.listen(port)
