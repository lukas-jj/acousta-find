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
  return db('guitars')
  .join('brands', 'brands.id', '=', 'guitars.brand_id').whereIn('guitars.brand_id', formData.brands)
  // .select('guitars.id', 'guitars.name').whereIn("brands.id", formData.brands)

}
module.exports = {
  getGuitars,
  getBrands,
  getTypes,
  getFilteredList
}
