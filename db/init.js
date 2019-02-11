const Datastore = require('nedb')

const db = new Datastore({ filename: 'path/to/music', autoload: true })

module.exports = db
