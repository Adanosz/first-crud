
exports.up = function(knex) {
  return knex.schema.createTable('categories',(table) => {
    table.increments();
    table.string('name');
    table.enu('status', ['important', 'freetime', 'family']);
    table.timestamp('updatedAt').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    table.timestamp('createdAt').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('categories')
};

