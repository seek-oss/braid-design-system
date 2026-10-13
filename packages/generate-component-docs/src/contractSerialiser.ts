import type { NormalisedPropType } from './generate.ts';

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
    } else if (type.type === 'function') {
      return type.signatures
        .map(({ typeParams, params, returnType }) => {
          const generics = typeParams.length
            ? `<${typeParams.join(', ')}>`
            : '';
          const parameters = params
            .map(
              ({ name, optional, rest, type: paramType }) =>
                `${rest ? '...' : ''}${name}${optional ? '?' : ''}: ${serializer(paramType)}`,
            )
            .join(', ');

          return `${generics}(${parameters}) => ${serializer(returnType)}`;
        })
        .join('\n');
    } else if (type.type === 'interface') {
      return `{${Object.values(type.props)
        .sort((a, b) => a.propName.localeCompare(b.propName))
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
      return ['union', 'interface', 'alias', 'function'].includes(val.type);
    }

    return typeof val === 'string';
  },
};
