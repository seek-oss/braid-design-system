import { markResetImported } from '../lib/reset/resetTracker';

if (process.env.NODE_ENV === 'development') {
  markResetImported();
}

export * from '../lib/reset/reset.treat';
