const stops = require('./stops/stops.service.js');

export default (app) => {
  app.configure(stops);
};
