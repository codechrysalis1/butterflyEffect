
exports.up = function (knex) {
  return knex.schema.createTable('place', (t) => {
    t.increments().index();
    t.decimal('latitude', 12, 8);
    t.decimal('longitude', 12, 8);
    t.text('type');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('place');
};
