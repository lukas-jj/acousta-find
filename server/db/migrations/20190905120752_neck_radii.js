exports.up = function (knex) {
  return knex.schema.createTable("neck_radii", (table) => {
    table.increments("id")
    table.string("neck_radius")
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("neck_radii")
}
