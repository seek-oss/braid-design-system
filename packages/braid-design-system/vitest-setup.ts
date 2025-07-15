/**
 * ----------------------------------------------------------------------
 * NOTE: When adding stub APIs that are unavailable in the `jsdom`
 * environment, remember to add them to `BraidTestProvider` to ensure
 * we are stubbing our dependent APIs in consumer test environments too.
 * ----------------------------------------------------------------------
 */

import '@testing-library/jest-dom/vitest';
import 'html-validate/vitest';

import { format } from 'util';

const error = global.console.error;

global.console.error = (message: any, ...restArgs: any[]) => {
  const allArgs = [message, ...restArgs];

  error(...allArgs);

  throw new Error(
    ...(typeof message === 'string' ? [format(message, ...restArgs)] : allArgs),
  );
};

vi.setConfig({ testTimeout: 30000 });
