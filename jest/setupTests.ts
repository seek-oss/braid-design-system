import { format, TextEncoder, TextDecoder } from 'util';

// The `jsdom` jest environment doesn't expose `TextEncoder` or `TextDecoder`
// AFAIK this hack was never required when braid was using sku to run tests,
// so I'm not sure why it has suddenly become an issue
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// The `jsdom` jest environment doesn't provide `ResizeObserver`
class MockResizeObserver {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
}

global.ResizeObserver = MockResizeObserver;

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
