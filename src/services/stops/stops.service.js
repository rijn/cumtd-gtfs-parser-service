// Initializes the `stops` service on path `/stops`
const createService = require('feathers-mongoose');
const createModel = require('../../models/stops.model');
const hooks = require('./stops.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/stops', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('stops');

  service.hooks(hooks);
};
