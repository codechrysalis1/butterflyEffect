module.exports = (knex, Telemetry) => {
  return async (drone_id) => {
    try {
      const telemetrys = await knex('telemetry')
        .where({ drone_id })
        .select();
      return new Telemetry(telemetrys[0]);
    } catch (err) {
      throw err;
    }
  };
};