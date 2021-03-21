exports.up = function (knex) {
  return knex.schema.createTable("woods", (table) => {
    table.increments("id")
    table.boolean("is_solid_top")
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("woods")
}
