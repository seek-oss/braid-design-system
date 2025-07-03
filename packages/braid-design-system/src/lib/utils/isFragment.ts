import type { ReactElement } from 'react';

const REACT_ELEMENT_TYPE = Symbol.for('react.transitional.element');
const LEGACY_REACT_ELEMENT_TYPE = Symbol.for('react.element');
const REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');

/**
 * A subset of the logic from `react-is` that supports both React 18 and 19.
 * We only use this to check for React fragments so only that code has been used.
 * @see https://github.com/facebook/react/blob/main/packages/react-is/src/ReactIs.js#L40
 */

const isReactElementType = (value: any) => {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  const $$typeof = value.$$typeof;
  return (
    $$typeof === REACT_ELEMENT_TYPE || $$typeof === LEGACY_REACT_ELEMENT_TYPE
  );
};

export const isFragment = (value: any): value is ReactElement =>
  isReactElementType(value) && value.type === REACT_FRAGMENT_TYPE;
