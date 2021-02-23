exports.up = function (knex) {
  return knex.schema.createTable("brands", (table) => {
    table.increments("id")
    table.string("name")
    table.string("brand")
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("brands")
}
