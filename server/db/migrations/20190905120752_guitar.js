exports.up = function (knex) {
  return knex.schema.createTable("guitars", (table) => {
    table.increments("id")
    table.string("name")
    table.integer("brand_id")
    table.string("type_id")
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("guitars")
}
