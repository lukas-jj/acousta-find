exports.up = function (knex) {
  return knex.schema.createTable("wood_tops", (table) => {
    table.increments("id")
    table.string("wood_top")
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("wood_tops")
}
