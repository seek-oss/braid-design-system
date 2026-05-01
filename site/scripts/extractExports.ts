import {
  transformFileSync,
  type NodePath,
  type PluginObj,
  types as t,
} from '@babel/core';

const extractExportsPlugin = (): PluginObj => {
  const exports: string[] = [];

  return {
    visitor: {
      ExportSpecifier(path: NodePath<t.ExportSpecifier>) {
        const exported = path.node.exported;

        if (t.isIdentifier(exported)) {
          exports.push(exported.name);
        }
      },
    },
    post(file) {
      const metadata = file.metadata as { exports?: string[] };
      metadata.exports = exports;
    },
  };
};

const extractExports = (filename: string): string[] => {
  const result = transformFileSync(filename, {
    presets: ['@babel/preset-typescript'],
    plugins: [extractExportsPlugin],
    configFile: false,
  });

  const metadata = result?.metadata as { exports?: string[] } | undefined;

  return metadata?.exports ?? [];
};

export default extractExports;
