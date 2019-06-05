import generate from './generate';

describe('public API', () => {
  const componentDocs = generate();

  it.each(Object.keys(componentDocs))('%s', componentName => {
    const componentProps = componentDocs[componentName];

    expect(componentProps).toMatchSnapshot();
  });
});
