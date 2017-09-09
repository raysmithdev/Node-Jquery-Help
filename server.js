const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/simple-api')

app.use(bodyParser.json())
app.use(express.static('public'))

app.post('/user', (req, res) => {
  console.log('Works');
})

app.listen(process.env.PORT || 8080, () => console.log('Server is up & running a ok'))
