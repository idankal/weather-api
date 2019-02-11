const express = require('express'),
      id3 = require('id3-parser'),
      fs = require('fs'),
      path = require('path'),
      db = require('../db/init.js'),
      router = express()

router.get('/get-song', (req,res) => {
  let filePath =  path.join(__dirname, '..', 'resource', 'Kalimba.mp3')
  fs.exists(filePath, exists => {
      if(exists) {
        let stat = fs.statSync(filePath)
        res.writeHead(200, {
          'Content-Type': 'audio/mpeg',
          'Content-Length': stat.size
        })
        fs.createReadStream(filePath).pipe(res)
      } else {
        res.writeHead(400, {"Content-Type": "text/plain"})
        res.end("ERROR File does not exist")
      }
    })
})

module.exports = router
