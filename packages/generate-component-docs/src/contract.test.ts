import { typeSerializer } from './contractSerialiser';
import generate from './generate';

// eslint-disable-next-line jest/no-standalone-expect
expect.addSnapshotSerializer(typeSerializer);

const componentDocs = generate();

it.each(Object.keys(componentDocs))('%s', (componentName) => {
  const componentProps = componentDocs[componentName];

  expect(componentProps).toMatchSnapshot();
});
