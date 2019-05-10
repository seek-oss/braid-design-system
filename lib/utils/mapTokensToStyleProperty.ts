import mapValues from 'lodash/mapValues';

export default <Keys extends string, TokenValue, StyleProperty extends string>(
  tokens: Record<Keys, TokenValue>,
  propertyName: StyleProperty,
) => {
  type MappedStyles = Record<Keys, { [key in StyleProperty]: TokenValue }>;

  return mapValues(tokens, value => ({
    [propertyName]: value,
  })) as MappedStyles;
};
