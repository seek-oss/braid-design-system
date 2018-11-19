const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const fastGlob = require('fast-glob').async;
const { parse: parseJs } = require('react-docgen');
const { parse: parseTs } = require('react-docgen-typescript').withCustomConfig(
  path.join(process.cwd(), 'tsconfig.json'),
  {
    propFilter: prop => !/node_modules/.test(prop.parent.fileName)
  }
);
const mapValues = require('lodash/mapValues');
const { normaliseType, normaliseDefaultValue } = require('./normaliseProp');

const normaliseData = ({ props = {}, ...rest }) => ({
  ...rest,
  props: mapValues(props, prop => ({
    ...prop,
    defaultValue: normaliseDefaultValue(prop),
    type: normaliseType(prop)
  }))
});

const parseDocsFromFile = async file => {
  let componentDoc;
  const contents = await readFile(file, 'utf-8');

  try {
    componentDoc = parseJs(contents);
  } catch (e) {
    if (
      [
        'No suitable component definition found.',
        'Cannot convert undefined or null to object'
      ].includes(e.message)
    ) {
      return false;
    }
    throw e;
  }

  return normaliseData(componentDoc);
};

module.exports = async ({
  include = '',
  exclude: ignore = [],
  lang = 'js'
} = {}) => {
  const files = await fastGlob(include, { ignore });

  if (lang === 'ts') {
    return parseTs(files).map(normaliseData);
  }

  const componentDocs = await Promise.all(files.map(parseDocsFromFile));

  return componentDocs.filter(Boolean);
};
