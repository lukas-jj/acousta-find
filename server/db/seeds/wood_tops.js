exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('wood_tops').del()
    .then(function () {
      // Inserts seed entries
      return knex('wood_tops').insert([
        { id: 1, wood_top: "Spruce", },
        { id: 2, wood_top: "Maple", },
        { id: 3, wood_top: "Redwood", },

      ])
    })
}
