import { markResetImported } from './resetTracker';

if (process.env.NODE_ENV === 'development') {
  markResetImported();
}

export * from './reset.css';