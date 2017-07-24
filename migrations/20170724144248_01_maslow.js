
exports.up = function(knex, Promise) {
  return knex.schema.createTable('maslow', (table) => {
    table.increments()
    table.text('shelter')
    table.text('protection')
    table.text('transportation')
    table.integer('how_many_people_in_group')
    table.boolean('infected').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('maslow')
};
