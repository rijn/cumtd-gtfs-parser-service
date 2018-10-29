const Promise = require('bluebird');
const config = require('config');
const gtfs = require('gtfs');
const mongoose = require('mongoose');
const path = require('path');
const request = require('request');

const fs = Promise.promisifyAll(require('fs'));

const gtfsConfig = config.get('gtfs');

gtfsConfig.agencies[0].path = path.join(__dirname, '../../tmp/google_transit.zip');

mongoose.connect(gtfsConfig.mongoUrl, { useNewUrlParser: true });

const downloadGtfsAndParse = async url => {
  const cacheDir = path.resolve(__dirname, '../../tmp/');
  const cachePath = path.resolve(cacheDir, 'google_transit.zip');
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir);
  }
  if (fs.existsSync(cachePath)) {
    fs.unlinkSync(cachePath);
  }
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(cachePath);
    request(url)
      .on('error', reject)
      .pipe(file)
      .on('finish', () => {
        file.close();
        resolve();
      });
  }).then(() => {
    const isNewCacheExist = fs.existsSync(cachePath);
    if (!isNewCacheExist) throw new Error('download failed');
  }).then(() => gtfs.import(gtfsConfig)).then(() => mongoose.connection.close());
};

module.exports = downloadGtfsAndParse;
