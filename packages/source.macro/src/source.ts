export interface Source<Value> {
  code: string;
  value: Value;
}

/**
 * Returns the code passed to it as both a string and the original value.
 *
 * This is a macro, so calls to it are replaced at build time. Make sure the
 * `plugin` exported from this package is configured in your bundler.
 *
 * @example
 * ```tsx
 * import { source } from '@braid-design-system/source.macro';
 *
 * const result = source(<div>Hello world</div>);
 * // Returns { code: '<div>Hello world</div>', value: <div>Hello world</div> }
 * ```
 */
export function source<Value>(_value: Value): Source<Value> {
  throw new Error(
    'The `source` macro was called at runtime. Calls to `source` must be replaced at build time, make sure the `plugin` from `@braid-design-system/source.macro` is configured in your bundler.',
  );
}
