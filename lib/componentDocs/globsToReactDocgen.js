const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const fastGlob = require('fast-glob').async;
const { parse } = require('react-docgen');
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
    componentDoc = parse(contents);
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

module.exports = async ({ include = '', exclude: ignore = [] } = {}) => {
  const files = await fastGlob(include, { ignore });
  const componentDocs = await Promise.all(files.map(parseDocsFromFile));

  return componentDocs.filter(Boolean);
};
