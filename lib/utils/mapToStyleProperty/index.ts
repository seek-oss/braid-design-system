import { StyleRule } from '@mattsjones/css-core';
import mapValues from 'lodash/mapValues';
import { Style } from 'sku/treat';

export const mapToStyleProperty = <
  Key extends string | number,
  Value extends string | number
>(
  map: Record<Key, Value>,
  propertyName: keyof StyleRule,
  mapper?: (value: Value, propertyName: keyof StyleRule) => Style,
) =>
  mapValues(map, (value: Value) =>
    mapper ? mapper(value, propertyName) : { [propertyName]: value },
  );
