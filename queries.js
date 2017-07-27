const knex = require('./db/knex')

module.exports = {
  getAll: function(){
    return knex('maslow')
  },

  getById: function(id){
    return knex('maslow').where('maslow.id', id)
  },

  postNew: function(body){
    return knex('maslow').insert(body)
  },

  deletePost: function(id){
    return knex('maslow').where('maslow.id', id).del()
  },

  addPost: function(id){
    return knex('maslow').insert(element)
  }

}
