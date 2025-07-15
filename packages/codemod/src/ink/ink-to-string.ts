import EventEmitter from 'events';

import { render } from 'ink';
import type React from 'react';

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

export const renderToString = (node: React.JSX.Element): string => {
  const stdout = createStdout();

  render(node, {
    // @ts-ignore
    stdout,
    debug: true,
  });

  return stdout.get();
};
