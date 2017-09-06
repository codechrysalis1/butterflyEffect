
exports.up = function (knex) {
  return knex.schema.createTable('place', (t) => {
    t.increments().index();
    t.float('latitude');
    t.float('longitude');
    t.text('type');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('place');
};
