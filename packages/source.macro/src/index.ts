import { source } from './source.ts';

export { source, type Source } from './source.ts';
export { sourceMacroPlugin, type SourceMacroPluginOptions } from './plugin.ts';
export {
  transformSourceMacro,
  type TransformSourceMacroOptions,
  type TransformSourceMacroResult,
} from './transform.ts';

/**
 * Prefer the named `source` export.
 */
export default source;
