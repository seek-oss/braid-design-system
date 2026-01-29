// Ensure reset and atoms are the lowest specificity
import './lib/css/reset/reset.css';
import './lib/css/atoms/sprinkles.css';

import { markResetImported } from './lib/css/reset/resetTracker';

if (process.env.NODE_ENV === 'development') {
  markResetImported();
}
