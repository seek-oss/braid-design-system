import { typeSerializer } from './contractSerialiser.ts';
import generate from './generate.ts';

expect.addSnapshotSerializer(typeSerializer);

const componentDocs = generate();

it.each(Object.keys(componentDocs))('%s', (componentName) => {
  const componentProps = componentDocs[componentName];

  expect(componentProps).toMatchSnapshot();
});
