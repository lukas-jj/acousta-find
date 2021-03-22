exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('solid_tops').del()
    .then(function () {
      // Inserts seed entries
      return knex('solid_tops').insert([
        { id: 1, solid_top: true, },
        { id: 2, solid_top: false, },
      ])
    })
}
