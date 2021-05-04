const connection = require('./connection')

function getGuitars(db = connection) {
  return db('guitars').select()
}

function getBrands(db = connection) {
  return db('brands').select()
}

function getTypes(db = connection) {
  return db('types').select()
}

function getWoodTops(db = connection) {
  return db('wood_tops').select()
}

function getNeckWidths(db = connection) {
  return db('neck_widths').select()
}

function getFilteredList(formData, db = connection) {
  console.log(formData)
  return db('guitars')
    .join("brands", brands.id, '=', guitars.brand_id)
    .join("types", types.id, '=', guitars.type_id)
    .join("wood_tops",wood_tops.id, '=', guitars.wood_top_id)
    .join("neck_widths", neck_widths.id, '=', guitars.neck_width_id)
    .whereIn(guitars.brand_id, formData.brands)
    .whereIn(guitars.type_id, formData.types)
    .whereIn(guitars.wood_top_id, formData.wood_tops)
    .whereIn(guitars.neck_width_id, formData.neck_widths)
    .select("*", "guitars.id as id")
  }


module.exports = {
  getGuitars,
  getBrands,
  getTypes,
  getFilteredList,
  getWoodTops,
  getNeckWidths
}
