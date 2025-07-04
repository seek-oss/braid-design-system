/**
 * ----------------------------------------------------------------------
 * NOTE: When adding stub APIs that are unavailable in the `jsdom`
 * environment, remember to add them to `BraidTestProvider` to ensure
 * we are stubbing our dependent APIs in consumer test environments too.
 * ----------------------------------------------------------------------
 */

import 'html-validate/vitest';
import '@testing-library/jest-dom/vitest';

import { format, TextEncoder, TextDecoder } from 'util';

// The `jsdom` environment doesn't expose `TextEncoder` or `TextDecoder`
// AFAIK this hack was never required when braid was using sku to run tests,
// so I'm not sure why it has suddenly become an issue
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const error = global.console.error;

globalThis.IS_REACT_ACT_ENVIRONMENT = true;
global.console.error = (message: any, ...restArgs: any[]) => {
  const allArgs = [message, ...restArgs];

  error(...allArgs);

  throw new Error(
    ...(typeof message === 'string' ? [format(message, ...restArgs)] : allArgs),
  );
};

vi.setConfig({ testTimeout: 30000 });
