require('dotenv').config()

const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      path = require('path'),
      fs = require('fs'),
      { PORT, MODE } = process.env,
      app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

if (MODE === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'dist')))
} else {
  app.use(express.static(path.join(__dirname, 'client', 'src')))
}

app.use('/api/', require('./api/musicR.js'))

app.get('*', (req,res) => {
  let html
  if (MODE === 'production') {
    html = fs.createReadStream(path.join(__dirname, 'client', 'dist', 'index.html'))
  } else {
    html = fs.createReadStream(path.join(__dirname, 'client', 'src', 'index.html'))
  }
  html.pipe(res)
})

app.listen(PORT, () => console.log(`App running in port: ${PORT}, mode: ${MODE}`))
