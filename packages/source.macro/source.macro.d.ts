export interface Source<Value> {
  code: string;
  value: Value;
}

export interface SourceMacroOptions {
  /**
   * Whether to format the `code` string with `prettier.`
   *
   * @default true
   */
  formatWithPrettier?: boolean;
}

export default function source<Value>(
  value: Value,
  options?: SourceMacroOptions,
): Source<Value>;
