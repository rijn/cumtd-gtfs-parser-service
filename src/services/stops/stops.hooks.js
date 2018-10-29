import { disallow } from 'feathers-hooks-common';
import gtfs from 'gtfs';

module.exports = {
  before: {
    all: [],
    find: [
      async context => {
        const options = {};
        if (context.params.query.within) {
          options.within = JSON.parse(context.params.query.within);
        }
        context.result = await gtfs.getStops(options);
      }
    ],
    get: [],
    create: [ disallow() ],
    update: [ disallow() ],
    patch: [ disallow() ],
    remove: [ disallow() ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
