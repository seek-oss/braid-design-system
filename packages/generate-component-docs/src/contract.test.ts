import { typeSerializer } from './contractSerialiser.ts';
import generate from './generate.ts';

expect.addSnapshotSerializer(typeSerializer);

const componentDocs = generate();

it.each(Object.keys(componentDocs))('%s', (componentName) => {
  const componentProps = componentDocs[componentName];

  expect(componentProps).toMatchSnapshot();
});

it('expands the parameters of functions returned by hooks', () => {
  expect(componentDocs.useToast).toMatchObject({
    exportType: 'hook',
    returnType: {
      type: 'function',
      signatures: [
        {
          params: [
            {
              name: 'toast',
              type: {
                type: 'union',
                types: expect.arrayContaining([
                  expect.objectContaining({
                    type: 'interface',
                    props: expect.objectContaining({
                      key: expect.objectContaining({
                        required: false,
                        type: 'string',
                      }),
                      message: expect.objectContaining({
                        required: true,
                        type: 'string',
                      }),
                      action: expect.objectContaining({
                        type: expect.objectContaining({
                          type: 'interface',
                          props: expect.objectContaining({
                            label: expect.objectContaining({ type: 'string' }),
                            onClick: expect.objectContaining({
                              type: {
                                type: 'function',
                                signatures: [
                                  {
                                    typeParams: [],
                                    params: [],
                                    returnType: 'void',
                                  },
                                ],
                              },
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                ]),
              },
            },
          ],
          returnType: 'void',
        },
      ],
    },
  });
  expect(componentDocs).toHaveProperty('useResponsiveValue');
});

it('preserves DataAttributeMap for component data props', () => {
  const componentsWithData = Object.keys(componentDocs).filter(
    (name) =>
      componentDocs[name].exportType === 'component' &&
      componentDocs[name].props.props.data,
  );

  expect(componentsWithData.length).toBeGreaterThan(0);

  for (const name of componentsWithData) {
    expect({ [name]: componentDocs[name].props.props.data.type }).toEqual({
      [name]: 'DataAttributeMap',
    });
  }
});

it('preserves DataAttributeMap in every Toast variant returned by useToast', () => {
  const variants =
    componentDocs.useToast.returnType.signatures[0].params[0].type.types;

  expect(variants).toHaveLength(2);

  for (const variant of variants) {
    expect(variant.props.data).toMatchObject({
      required: false,
      type: 'DataAttributeMap',
    });
  }
});
