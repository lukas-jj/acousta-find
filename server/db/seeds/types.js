exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('types').del()
    .then(function () {
      // Inserts seed entries
      return knex('types').insert([
        { id: 1, type: 'Travel', },
        { id: 2, type: 'Parlor', },
        { id: 3, type: 'Grand Auditorium',},
        { id: 4, type: 'Dreadnought',},
        { id: 5, type: 'Jumbo',}
      ])
    })
}
