module.exports = (knex, Segment) => {
  return async (trip_id) => {
    try {
      const segments = await knex('segment')
        .where({ trip_id })
        .select();
      const segmentsList = [];
      segments.forEach((segment) => {
       segmentsList.push(new Segment(segment));
      });

    

      return segmentsList;

    } catch (err) {
      throw err;
    }
  };
};