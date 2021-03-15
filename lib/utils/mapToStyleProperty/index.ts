import { StyleRule } from '@mattsjones/css-core';
import { Properties } from 'csstype';
import mapValues from 'lodash/mapValues';

export const mapToStyleProperty = <
  MapOfValues extends { [key: string]: string | number },
  Property extends keyof Properties<string | number>
>(
  map: MapOfValues,
  propertyName: Property,
  mapper?: (
    value: MapOfValues[keyof MapOfValues],
    propertyName: Property,
  ) => StyleRule,
): Record<keyof MapOfValues, StyleRule> =>
  mapValues(map, (value: MapOfValues[keyof MapOfValues]) =>
    mapper ? mapper(value, propertyName) : { [propertyName]: value },
  );
