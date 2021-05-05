exports.up = function (knex) {
  return knex.schema.createTable("guitars", (table) => {
    table.increments("id")
    table.string("name")
    table.integer("brand_id")
    table.integer("type_id")
    table.integer("wood_top_id")
    table.integer("neck_width_id")
    table.string("image")

  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("guitars")
}
