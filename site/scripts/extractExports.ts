import {
  transformFileSync,
  type NodePath,
  type PluginObj,
  type PluginPass,
  types as t,
} from '@babel/core';

interface PluginState extends PluginPass {
  exports: string[];
}

function extractExportsPlugin(): PluginObj<PluginState> {
  return {
    pre() {
      this.exports = [];
    },
    visitor: {
      ExportSpecifier(path: NodePath<t.ExportSpecifier>) {
        const exported = path.node.exported;
        if (t.isIdentifier(exported)) {
          this.exports.push(exported.name);
        }
      },
    },
    post(file) {
      const metadata = file.metadata as { exports?: string[] };
      metadata.exports = this.exports;
    },
  };
}

function extractExports(filename: string): string[] {
  const result = transformFileSync(filename, {
    presets: ['@babel/preset-typescript'],
    plugins: [extractExportsPlugin],
    configFile: false,
  })!;

  const metadata = result?.metadata as { exports?: string[] } | undefined;

  return metadata?.exports ?? [];
}

export default extractExports;
