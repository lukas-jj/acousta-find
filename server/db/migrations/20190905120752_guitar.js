exports.up = function (knex) {
  return knex.schema.createTable('guitars', table => {
    table.increments('id')
    table.string('name')
    table.string('brand')
    table.string('type')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('guitars')
}
