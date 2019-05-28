import mapValues from 'lodash/mapValues';
import { Properties } from 'csstype';
import { Styles } from 'sku/treat';

export const mapToStyleProperty = <
  Map extends string,
  Value extends string | number
>(
  map: Record<Map, Value>,
  propertyName: keyof Properties,
  mapper?: (value: Value, propertyName: keyof Properties) => Styles,
) =>
  mapValues(map, (value: Value) =>
    mapper ? mapper(value, propertyName) : { [propertyName]: value },
  );
