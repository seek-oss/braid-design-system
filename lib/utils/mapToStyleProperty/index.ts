import { Properties, SimplePseudos } from 'csstype';
import mapValues from 'lodash/mapValues';

type CSSProperties = Properties<string | number> &
  { [P in SimplePseudos]?: Properties<string | number> };

export const mapToStyleProperty = <
  MapOfValues extends { [key: string]: string | number }
>(
  map: MapOfValues,
  propertyName: keyof Properties<string | number>,
  mapper?: (
    value: MapOfValues[string],
    propertyName: keyof Properties<string | number>,
  ) => CSSProperties,
): { [P in keyof MapOfValues]: CSSProperties } =>
  // @ts-expect-error
  mapValues(map, (value: MapOfValues[string]) =>
    mapper ? mapper(value, propertyName) : { [propertyName]: value },
  );
