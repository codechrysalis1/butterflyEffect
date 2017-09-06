
exports.up = function (knex) {
  return knex.schema.createTable('trip', (t) => {
    t.increments().index();
    t.integer('tracknum');
    t.enu('status', ['valid', 'invalid']);
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('trip');
};
