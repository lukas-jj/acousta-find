exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('guitars').del()
    .then(function () {
      // Inserts seed entries
      return knex('guitars').insert([
        { id: 1, name: 'GS-Mini', brand_id: 1, type_id: 1, wood_top_id: 1 },
        { id: 2, name: '410', brand_id: 1, type_id: 4  , wood_top_id: 1 },
        { id: 3, name: '414', brand_id: 1, type_id: 3  , wood_top_id: 1 },
        { id: 4, name: 'Little Lady 2', brand_id: 3, type_id: 1  , wood_top_id: 1 },
        { id: 5, name: 'Angel 2', brand_id: 4, type_id: 3  , wood_top_id: 1 },
        { id: 6, name: 'D-28', brand_id: 2, type_id: 4 , wood_top_id: 1 },
        { id: 7, name: 'F-55', brand_id: 4, type_id: 5 , wood_top_id: 1 },
        
      ])
    })
}
