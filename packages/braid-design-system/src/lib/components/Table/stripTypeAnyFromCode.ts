import type { Source } from '@braid-design-system/source.macro';

export function stripTypeAnyFromCode<Value>(
  typedCode: Source<Value>,
): Source<Value> {
  const { code, value } = typedCode;

  return {
    code: code.replaceAll(': any', ''),
    value,
  };
}
