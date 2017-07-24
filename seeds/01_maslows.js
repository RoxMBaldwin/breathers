
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "maslow"; ALTER SEQUENCE maslow_id_seq RESTART WITH 2;')
    .then(function() {
      var information = [{
        id:1,
        shelter:'tent',
        protection:'stick',
        transportation:'bicycle',
        how_many_people_in_group: 4,
        infected:false
      }]
      return knex('maslow').insert(information)
    })
}
