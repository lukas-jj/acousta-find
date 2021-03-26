exports.up = function (knex) {
  return knex.schema.createTable("neck_widths", (table) => {
    table.increments("id")
    table.string("neck_width")
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("neck_widths")
}
