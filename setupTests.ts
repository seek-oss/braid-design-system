import { format } from 'util';

const error = global.console.error;

globalThis.IS_REACT_ACT_ENVIRONMENT = true;
global.console.error = (message: any, ...restArgs: any[]) => {
  const allArgs = [message, ...restArgs];

  error(...allArgs);

  throw new Error(
    ...(typeof message === 'string' ? [format(message, ...restArgs)] : allArgs),
  );
};

jest.setTimeout(30000);
