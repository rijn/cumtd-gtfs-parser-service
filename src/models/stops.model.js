// stops-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const stops = new Schema({
    _id_: { type: Schema.Types.ObjectId, index: true },
    agency_key: { type: String, index: true },
    stop_id: { type: Schema.Types.ObjectId, index: true },
    stop_code: { type: String, index: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('stops', stops);
};

