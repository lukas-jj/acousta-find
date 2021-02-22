const connection = require('./connection')

function getGuitars (db = connection) {
  return db('guitars').select()
}

module.exports = {
  getGuitars
}
