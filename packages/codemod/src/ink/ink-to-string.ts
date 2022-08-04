import EventEmitter from 'events';
import { render } from 'ink';

const createStdout = (): any => {
  let lastWrite: any;

  const stdout = new EventEmitter() as any;
  stdout.columns = process.stdout.columns ?? 100;
  stdout.write = (writeArgs: any) => {
    lastWrite = writeArgs;
  };
  stdout.get = () => lastWrite;

  return stdout;
};

export const renderToString = (node: JSX.Element): string => {
  const stdout = createStdout();

  render(node, {
    // @ts-ignore
    stdout,
    debug: true,
  });

  return stdout.get();
};
