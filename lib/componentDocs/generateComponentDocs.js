const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
const mapValues = require('lodash/mapValues');
const globsToReactDocgen = require('./globsToReactDocgen');
const { normaliseType, normaliseDefaultValue } = require('./normaliseProp');

const normaliseDocs = ({ props = {}, ...rest }) => ({
  ...rest,
  props: mapValues(props, prop => ({
    ...prop,
    defaultValue: normaliseDefaultValue(prop),
    type: normaliseType(prop)
  }))
});

const omitDocWithNoProps = ({ props = {} }) => Object.keys(props).length > 0;

const byDisplayName = (acc, doc) => ({
  ...acc,
  [doc.displayName]: doc
});

(async () => {
  const componentDocs = await globsToReactDocgen({
    include: 'lib/components/**/*.{js,ts,tsx}',
    exclude: [
      'lib/components/private/**/*',
      'lib/components/index.js',
      '**/*.{css,docs,test}.js',
      '**/*.css.js.d.ts'
    ]
  });

  const keyedDocs = componentDocs
    .map(normaliseDocs)
    .filter(omitDocWithNoProps)
    .reduce(byDisplayName, {});

  await writeFile(
    path.join(__dirname, 'componentDocs.json'),
    `${JSON.stringify(keyedDocs, null, 2)}\n`
  );
})();
