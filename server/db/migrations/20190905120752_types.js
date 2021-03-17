exports.up = function (knex) {
  return knex.schema.createTable("types", (table) => {
    table.increments("id")
    table.string("type")
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("types")
}
