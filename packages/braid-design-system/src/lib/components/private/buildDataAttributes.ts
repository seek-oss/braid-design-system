import dedent from 'dedent';

export type DataAttributeMap = Record<string, string | number | boolean>;

interface DataAttributeParams {
  data?: DataAttributeMap;
  validateRestProps: Record<string, any> | false;
}

export default ({ data, validateRestProps }: DataAttributeParams) => {
  if (process.env.NODE_ENV !== 'production') {
    if (validateRestProps !== false) {
      const dataAttrs = Object.keys(validateRestProps).filter((prop) =>
        prop.startsWith('data-'),
      );

      const formatter = (v: boolean | string | number) => {
        if (typeof v === 'boolean') {
          return v ? '' : `={false}`;
        }

        if (typeof v === 'number') {
          return `={${v}}`;
        }

        return `="${v}"`;
      };

      if (dataAttrs.length > 0) {
        // eslint-disable-next-line no-console
        console.warn(
          dedent`
          Braid components do not support the native data attribute format. Use the “data” prop instead.
            <Component
          %c${dataAttrs
            .map((attr) => `-    ${attr}${formatter(validateRestProps[attr])}`)
            .join('\n')}
          %c+    data={{
          ${dataAttrs
            .map((attr) => {
              const attributeName = attr.replace(/^data-/, '');
              const property = attributeName.includes('-')
                ? `'${attributeName}'`
                : attributeName;

              return `+      ${property}: ${
                typeof validateRestProps[attr] === 'string'
                  ? `'${validateRestProps[attr]}'`
                  : validateRestProps[attr]
              },`;
            })
            .join('\n')}
          +    }}
            %c/>
           For more details, see the “Data Attributes” documentation:
           https://seek-oss.github.io/braid-design-system/components/Box#data-attributes
        `,
          'color: red',
          'color: green',
          'color: inherit',
        );
      }
    }
  }

  if (!data) {
    return;
  }

  const keys = Object.keys(data);
  const dataAttributes: DataAttributeMap = {};

  for (const key of keys) {
    dataAttributes[`data-${key}`] = data[key];
  }

  return dataAttributes;
};
