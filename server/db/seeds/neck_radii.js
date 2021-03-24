exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('neck_radii').del()
    .then(function () {
      // Inserts seed entries
      return knex('neck_radii').insert([
        { id: 1, neck_radius: "C", },
        { id: 2, neck_radius: "D", },
      ])
    })
}
