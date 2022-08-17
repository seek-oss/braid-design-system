const { transformFileSync } = require('@babel/core');

function extractExportsPlugin() {
  return {
    pre() {
      this.exports = [];
    },
    visitor: {
      ExportSpecifier(path) {
        this.exports.push(path.node.exported.name);
      },
    },
    post(state) {
      state.metadata.exports = this.exports;
    },
  };
}

function extractExports(filename) {
  const { metadata } = transformFileSync(filename, {
    presets: [require.resolve('@babel/preset-typescript')],
    plugins: [extractExportsPlugin],
    configFile: false,
  });

  return metadata.exports;
}

module.exports = extractExports;
