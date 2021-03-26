exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('neck_widths').del()
    .then(function () {
      // Inserts seed entries
      return knex('neck_widths').insert([
        { id: 1, neck_width: "1-11/16", },
        { id: 2, neck_width: "1 3/4", },
      ])
    })
}
