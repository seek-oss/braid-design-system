import { createCss, buildValues, getCapHeight } from './core';

function capsize(options) {
  return createCss(buildValues(options));
}

export default capsize;
export { getCapHeight };