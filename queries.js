const knex = require('./db/knex')

module.exports = {
  getAll: function(){
    return knex('maslow')
  }
}
