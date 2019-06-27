import { typeSerializer, contractSerializer } from './contractSerialiser';
import generate from './generate';

expect.addSnapshotSerializer(typeSerializer);
expect.addSnapshotSerializer(contractSerializer);

const componentDocs = generate();

it.each(Object.keys(componentDocs))('%s', componentName => {
  const componentProps = componentDocs[componentName];

  expect(componentProps).toMatchSnapshot();
});
