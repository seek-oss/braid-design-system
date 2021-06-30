import { markResetImported } from './resetTracker';

if (process.env.NODE_ENV === 'development') {
  markResetImported();
}

// Ensure reset and atoms are the lowest specificity
import '../atoms/atoms';
