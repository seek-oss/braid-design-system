import 'html-validate/vitest';
import '@testing-library/jest-dom/vitest';

import { format } from 'util';

// The `jsdom` environment doesn't provide `ResizeObserver`
class MockResizeObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

global.ResizeObserver = MockResizeObserver;

class MockIntersectionObserver {
  root = null;
  rootMargin = '';
  thresholds = [];

  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn();
}

global.IntersectionObserver = MockIntersectionObserver;

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
