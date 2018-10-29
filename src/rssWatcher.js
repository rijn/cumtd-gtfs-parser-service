const subscribeGtfsFeed = require('./utils/subscribeGtfsFeed');
const downloadGtfsAndParse = require('./utils/downloadGtfsAndParse');

subscribeGtfsFeed(downloadGtfsAndParse);
