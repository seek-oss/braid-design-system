import { PropDetails, NormalisedPropType } from './generate';

interface ComponentContract {
  props: {
    [propName: string]: PropDetails;
  };
}

export const typeSerializer = {
  print: (
    type: NormalisedPropType,
    serializer: (value: any) => string,
    indent: (value: string) => string,
  ) => {
    if (typeof type === 'string') {
      return type;
    } else if (type.type === 'union') {
      return type.types
        .map(subType => {
          return `\n${indent(`| ${serializer(subType)}`)}`;
        })
        .join('');
    } else {
      return `${type.alias}<${type.params
        .map(param => `${serializer(param)}`)
        .join(',')}\n>`;
    }
  },

  test: (val: any) => {
    return (
      typeof val === 'string' ||
      ((typeof val === 'object' && val.type === 'union') ||
        (typeof val === 'object' && val.type === 'alias'))
    );
  },
};

export const contractSerializer = {
  print: ({ props }: ComponentContract, serializer: (value: any) => string) => {
    return Object.values(props)
      .map(
        ({ propName, required, type }) =>
          `${propName}${required ? '' : '?'}: ${serializer(type)}`,
      )
      .join('\n');
  },

  test: (val: any) => {
    return val && val.hasOwnProperty('props');
  },
};
