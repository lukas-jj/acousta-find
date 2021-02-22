exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('guitars').del()
    .then(function () {
      // Inserts seed entries
      return knex('guitars').insert([
        { id: 1, name: 'Gs-Mini', brand: 'Taylor', type: "travel" },
        { id: 2, name: 'Little Lady 2', brand: 'Cole Clark', type: "travel" },
        { id: 3, name: 'Angel 2', brand: 'Cole Clark', type: "dreadnaught" },
        { id: 4, name: 'D-28', brand: 'Martin', type: "dreadnaught"},
        { id: 5, name: 'F-55', brand: 'Guild', type: "jumbo"}
      ])
    })
}
