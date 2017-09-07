module.exports = (knex, Station) => {
  return async () => {
    try {
      // TODO add type=station in where
      const stations = await knex('place').select();
      const stationsList = [];
      stations.forEach((station) => {
        stationsList.push(new Station(station));
      });
      return stationsList;
    } catch (err) {
      throw err;
    }
  };
};