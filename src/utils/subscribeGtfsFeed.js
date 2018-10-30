const FeedSub = require('feedsub');
const config = require('config');

const feedUrl = config.get('feedUrl');

const reader = new FeedSub(feedUrl, {
  emitOnStart: true,
  interval: 10 // Check feed every 10 minutes.
});

const subscribeGtfsFeed = fn => {
  reader.on('item', (item) => {
    fn && fn(item.link);
  });

  reader.start(true);
};

module.exports = subscribeGtfsFeed;
