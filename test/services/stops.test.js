const assert = require('assert');
const app = require('../../src/app');

describe('\'stops\' service', () => {
  it('registered the service', () => {
    const service = app.service('stops');

    assert.ok(service, 'Registered the service');
  });
});
