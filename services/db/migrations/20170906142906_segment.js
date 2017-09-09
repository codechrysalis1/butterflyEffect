const setup = knex =>
  knex.schema.createTable('segment', (t) => {
    t.increments().index();
    t.integer('trip_id').unsigned();
    t.foreign('trip_id').references('trip.id');
    t.integer('drone_id').unsigned();
    t.foreign('drone_id').references('drone.id');
    t.integer('source_id').unsigned();
    t.foreign('source_id').references('place.id');
    t.integer('des_id').unsigned();
    t.foreign('des_id').references('place.id');
    t.enu('status', ['inprogress', 'completed', 'waiting']);
  });

const rollback = knex =>
  knex.schema.dropTable('segment');

exports.up = setup;
exports.down = rollback;
