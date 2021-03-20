const connection = require('./connection')

function getGuitars (db = connection) {
  return db('guitars').select()
}

function getBrands (db = connection) {
  return db('brands').select()
}

function getTypes (db = connection) {
  return db('types').select()
}

function getFilteredList (formData, db = connection) {
  console.log(formData)
  return db('guitars').select()
}
module.exports = {
  getGuitars,
  getBrands,
  getTypes,
  getFilteredList
}
