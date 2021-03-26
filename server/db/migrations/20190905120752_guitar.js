exports.up = function (knex) {
  return knex.schema.createTable("guitars", (table) => {
    table.increments("id")
    table.string("name")
    table.integer("brand_id")
    table.string("type_id")
    table.string("wood_top_id")
    table.string("neck_width_id")
    table.string("image")

  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("guitars")
}
