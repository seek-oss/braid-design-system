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
  const tsComponentDocs = await globsToReactDocgen({
    include: 'lib/components/**/*.{ts,tsx}',
    exclude: [
      'lib/components/private/**/*',
      'lib/components/index.js',
      '**/*.css.js.d.ts'
    ],
    lang: 'ts'
  });

  const jsComponentDocs = await globsToReactDocgen({
    include: 'lib/components/**/*.js',
    exclude: [
      'lib/components/private/**/*',
      'lib/components/index.js',
      '**/*.{css,docs,test}.js'
    ],
    lang: 'js'
  });

  const keyedDocs = tsComponentDocs
    .concat(jsComponentDocs)
    .reduce(byDisplayName, {});

  await writeFile(
    path.join(__dirname, 'componentDocs.json'),
    `${JSON.stringify(keyedDocs, null, 2)}\n`
  );
})();
