const path = require('path');
const ghpages = require('gh-pages');
const basePath = path.join(__dirname, '../docs/dist');
const repoUrl = require('../package.json').repository.url;

const GH_TOKEN = process.env.GH_TOKEN;
const tokenRegex = GH_TOKEN ? new RegExp(GH_TOKEN, 'g') : null;

const log = function(message) {
  // eslint-disable-next-line no-console
  console.log(tokenRegex ? message.replace(tokenRegex, '[GH_TOKEN]') : message);
};

const makeConfig = function() {
  return {
    repo: GH_TOKEN
      ? repoUrl.replace('https://', `https://${GH_TOKEN}@`)
      : repoUrl,
    logger: log
  };
};

ghpages.publish(basePath, makeConfig(), function(err) {
  if (err) {
    log('Deployment error');
    log(JSON.stringify(err));
  } else {
    log('Deployment complete!');
  }
});
