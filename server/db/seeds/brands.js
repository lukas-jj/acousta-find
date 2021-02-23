exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('brands').del()
    .then(function () {
      // Inserts seed entries
      return knex('brands').insert([
        { id: 1, brand: 'Taylor' },
        { id: 2, brand: 'Martin' },
        { id: 3, brand: 'Cole Clark' },
        { id: 4, brand: 'Takamine' },
      ])
    })
}
