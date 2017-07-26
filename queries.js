const knex = require('./db/knex')

module.exports = {
  getAll: function(){
    return knex('maslow')
  },

  getById: function(id){
    return knex('maslow').where('maslow.id', id)
  }
}
