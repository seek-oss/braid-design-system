import sortBy from 'lodash/sortBy';
import type { NormalisedPropType } from './generate';

export const typeSerializer = {
  print: (
    t: unknown,
    serializer: (value: any) => string,
    indent: (value: string) => string,
  ) => {
    const type = t as NormalisedPropType;

    if (typeof type === 'string') {
      return type;
    } else if (type.type === 'union') {
      return type.types
        .sort()
        .map((subType) => `\n${indent(`| ${serializer(subType)}`)}`)
        .join('');
    } else if (type.type === 'interface') {
      return `{${sortBy(Object.values(type.props), ({ propName }) => propName)
        .map(
          ({ propName, required, type: propType }) =>
            `\n${indent(
              `${propName}${required ? '' : '?'}: ${serializer(propType)}`,
            )}`,
        )
        .join('')}\n}`;
    }
    return `${type.alias}<${type.params
      .map((param) => `${serializer(param)}`)
      .join(',')}\n>`;
  },

  test: (val: any) => {
    if (typeof val === 'object') {
      return ['union', 'interface', 'alias'].includes(val.type);
    }

    return typeof val === 'string';
  },
};
