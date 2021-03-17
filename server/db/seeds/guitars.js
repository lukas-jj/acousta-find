exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('guitars').del()
    .then(function () {
      // Inserts seed entries
      return knex('guitars').insert([
        { id: 1, name: 'GS-Mini', brand_id: 1, type_id: 1 },
        { id: 2, name: 'Little Lady 2', brand_id: 3, type_id: 1 },
        { id: 3, name: 'Angel 2', brand_id: 4, type_id: 2 },
        { id: 4, name: 'D-28', brand_id: 2, type_id: 2},
        { id: 5, name: 'F-55', brand_id: 4, type_id: 3},
      ])
    })
}
