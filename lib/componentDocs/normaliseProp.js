const normaliseType = ({ type }) => {
  switch (type.name) {
    case 'enum':
      return {
        name: type.value
          .map(({ value }) => JSON.stringify(value))
          .join(' | ')
          .replace(/(\')/g, '')
      };

    case 'union':
      return {
        name: type.value
          .map(t => normaliseType({ type: t }).name)
          .join(' | ')
          .replace(/(\')/g, '')
      };

    case 'custom':
      return {
        name: 'custom (see source)'
      };

    default:
      return type;
  }
};

const normaliseDefaultValue = ({ defaultValue }) =>
  defaultValue && defaultValue.value
    ? { value: defaultValue.value.replace(/(\')/g, '') }
    : null;

module.exports = {
  normaliseType,
  normaliseDefaultValue
};
