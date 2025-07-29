import type { FragmentProps, ReactElement } from 'react';

const REACT_ELEMENT_TYPE = Symbol.for('react.transitional.element');
const LEGACY_REACT_ELEMENT_TYPE = Symbol.for('react.element');
const REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');

/**
 * A subset of the logic from `react-is` that supports both React 18 and 19.
 * We only use this to check for React fragments so only that code has been used.
 * @see https://github.com/facebook/react/blob/97cdd5d3c33eda77be4f96a43f72d6916d3badbb/packages/react-is/src/ReactIs.js#L40}
 *
 * _Note: once we drop support for React 18 we should move back to using `react-is`_
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

export const isFragment = (value: any): value is ReactElement<FragmentProps> =>
  isReactElementType(value) && value.type === REACT_FRAGMENT_TYPE;
