const connection = require('./connection')

function getGuitars (db = connection) {
  return db('guitars').select()
}

function getBrands (db = connection) {
  return db('brands').select()
}

module.exports = {
  getGuitars,
  getBrands
}
