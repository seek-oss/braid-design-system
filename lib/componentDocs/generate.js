const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
const build = require('./build');

const byDisplayName = (acc, doc) => ({
  ...acc,
  [doc.displayName]: doc
});

(async () => {
  const componentDocs = await build({
    include: 'lib/components/**/*.js',
    exclude: [
      'lib/components/private/**/*',
      'lib/components/index.js',
      '**/*.{css,docs,test}.js'
    ]
  });

  const keyedDocs = componentDocs.reduce(byDisplayName, {});

  await writeFile(
    path.join(
      process.cwd(),
      'docs/src/App/ComponentProps/componentDocByName.json'
    ),
    `${JSON.stringify(keyedDocs, null, 2)}\n`
  );
})();
