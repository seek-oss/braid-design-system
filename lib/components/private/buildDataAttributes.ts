import mapKeys from 'lodash/mapKeys';

export type DataAttributeMap = Record<string, string | number>;

export default (data: DataAttributeMap = {}) =>
  mapKeys(data, (_, attrName) => `data-${attrName}`);
