const path = require('path');
const fastGlob = require('fast-glob').async;
const { parse: parseTs } = require('react-docgen-typescript').withCustomConfig(
  path.join(process.cwd(), 'tsconfig.json'),
  {
    propFilter: prop => !/node_modules/.test(prop.parent.fileName)
  }
);

module.exports = async ({ include = '', exclude: ignore = [] } = {}) => {
  const files = await fastGlob(include, { ignore });
  return parseTs(files);
};
