const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
const globsToReactDocgen = require('./globsToReactDocgen');

const byDisplayName = (acc, doc) => ({
  ...acc,
  [doc.displayName]: doc
});

(async () => {
  const componentDocs = await globsToReactDocgen({
    include: 'lib/components/**/*.js',
    exclude: [
      'lib/components/private/**/*',
      'lib/components/index.js',
      '**/*.{css,docs,test}.js'
    ]
  });

  const keyedDocs = componentDocs.reduce(byDisplayName, {});

  await writeFile(
    path.join(__dirname, 'componentDocs.json'),
    `${JSON.stringify(keyedDocs, null, 2)}\n`
  );
})();
