const fs = require('fs');
const fastGlob = require('fast-glob').async;
const { parse } = require('react-docgen');
const { normaliseType, normaliseDefaultValue } = require('./normaliseProp');

const normaliseData = ({ props = {}, ...rest }) =>
  Object.keys(props).reduce(
    (acc, prop) => ({
      ...acc,
      props: {
        ...acc.props,
        [prop]: {
          ...props[prop],
          defaultValue: normaliseDefaultValue(props[prop]),
          type: normaliseType(props[prop])
        }
      }
    }),
    rest
  );

module.exports = async ({ include = '', exclude: ignore = [] } = {}) => {
  const files = await fastGlob(include, { ignore });

  const types = files
    .map(file => {
      let componentDoc;
      const contents = fs.readFileSync(file, 'utf-8'); // eslint-disable-line no-sync

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
    })
    .filter(Boolean);

  return types;
};
