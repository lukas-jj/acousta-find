exports.up = function (knex) {
  return knex.schema.createTable("solid_tops", (table) => {
    table.increments("id")
    table.boolean("solid_top")
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("solid_tops")
}
