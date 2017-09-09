const express = require('express');
const uuidv4 = require('uuid/v4');

const router = express.Router();

module.exports = (services) => {
  /* GET stations listing. */
  router.get('/stations', async (req, res) => {
    try {
      const stations = await services.db.place.list();
      res.status(200).send(stations);
    } catch (err) {
      throw err;
    }
  });

  router.post('/route', async (req, res) => {
    try {
      const routes = req.body;
      const tracknum = uuidv4();

      let trip = {}
      trip.tracknum = tracknum;
      trip.status = "inprogress";
      // db trip
      let result = await services.db.trip.create(trip);

      const tripid = result.id;
      for (let i = 0; i < routes.length - 1; i++) {
        let segment = {};
        segment.source_id = routes[i].id;
        segment.des_id = routes[i + 1].id;
        segment.trip_id = tripid;
        segment.drone_id = i + 1;
        if (i === 0) {
          segment.status = "inprogress";
        } else {
          segment.status = "waiting";
        }
        // db segment
        await services.db.segment.create(segment);

        if (routes[i].name === "source" || routes[i].name === "destination") {
          let route = {};
          route.type = routes[i].name;
          route.latitude = routes[i].lat;
          route.longitude = routes[i].lng;
          //db place
          await services.db.place.create(route);
        }
      }

      res.status(200).send(result);
    } catch (err) {
      throw err;
    }
  });

  router.post('/tracknum', async (req, res) => {
    try {
      let tracknum = req.body.id
      const trip = await services.db.trip.search(tracknum);
      const tripid = trip.id;
      const segments = await services.db.segment.search(tripid);

      for (let i = 0; i < segments.length; i++) {
        if (segments[i].status === "inprogress") {
          const drone_id = segments[i].drone_id;
          console.log(segments[i],"segments[i]")
           console.log("segments[i].drone_id",segments[i].drone_id)
        //   const telemetryone = await services.db.telemetry.search(drone_id);
        //   console.log("telemetry", telemetryone)
        }
      }

      res.status(200).send("sending");
    } catch (err) {
      throw err;
    }
  })






  return router;
};
