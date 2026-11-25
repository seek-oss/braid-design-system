import type { Plugin } from 'rolldown';

import {
  type TransformSourceMacroOptions,
  sourceMacroImportSpecifier,
  transformSourceMacro,
} from './transform.ts';

export type SourceMacroPluginOptions = Pick<
  TransformSourceMacroOptions,
  'codeOnly'
>;

/**
 * A Rolldown plugin (also compatible with Vite 8+) that replaces calls to the
 * `source` macro at build time.
 *
 * The return type is intentionally left to be inferred, rather than annotated
 * as a Rolldown `Plugin`, so it's assignable to Vite's `Plugin` type as well.
 */
export const sourceMacroPlugin = (options: SourceMacroPluginOptions = {}) =>
  ({
    name: sourceMacroImportSpecifier,
    transform: {
      // Run before other transforms so they never see the macro import
      order: 'pre',
      filter: {
        id: {
          include: /\.(?:[jt]sx?|[cm][jt]s)(?:$|\?)/,
          exclude: /[/\\]node_modules[/\\]|^\0rolldown\/runtime\.js$/,
        },
        code: sourceMacroImportSpecifier,
      },
      async handler(code, id) {
        const result = await transformSourceMacro(code, {
          ...options,
          filename: id.replace(/\?.*$/, ''),
        });

        return result.code === code ? null : result;
      },
    },
  }) satisfies Plugin;
