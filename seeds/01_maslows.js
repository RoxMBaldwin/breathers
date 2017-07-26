
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "maslow"; ALTER SEQUENCE maslow_id_seq RESTART WITH 6;')
    .then(function() {
      var information = [{
        id:1,
        name:'Kilgore Trout',
        shelter:'tent',
        protection:'stick',
        transportation:'bicycle',
        how_many_people_in_group: 4,
        infected:false
      }, {
        id:2,
        name:'Billy Pilgrim',
        shelter:'tarp',
        protection:'slingshot',
        transportation:'horse',
        how_many_people_in_group:3,
        infected:false
      }, {
        id:3,
        name:'Leon Trotsky Trout',
        shelter:'lean-to',
        protection:'car keys',
        transportation:'roller blades',
        how_many_people_in_group:4,
        infected:true
      }, {
        id:4,
        name:'Selena MacIntosh',
        shelter:'tent',
        protection:'nail file',
        transportation:'wagon',
        how_many_people_in_group:5,
        infected:false
      }, {
        id:5,
        name:'Eugene Debs Hartke',
        shelter:'lean-to',
        protection:'golf club',
        transportation:'horse',
        how_many_people_in_group:5,
        infected:false
      }]
      return knex('maslow').insert(information)
    })
}
