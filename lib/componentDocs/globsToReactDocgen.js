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
const partition = require('lodash/partition');

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

  return componentDoc;
};

module.exports = async ({ include = '', exclude: ignore = [] } = {}) => {
  const files = await fastGlob(include, { ignore });
  const [tsFiles, jsFiles] = partition(files, file => /.*\.tsx?$/.test(file));
  let tsDocs = [];
  let jsDocs = [];

  if (tsFiles.length > 0) {
    tsDocs = parseTs(tsFiles);
  }

  if (jsFiles.length > 0) {
    const componentDocs = await Promise.all(jsFiles.map(parseDocsFromFile));

    jsDocs = componentDocs.filter(Boolean);
  }

  return [...tsDocs, ...jsDocs];
};
