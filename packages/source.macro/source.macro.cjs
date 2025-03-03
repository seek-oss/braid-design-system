const { default: generate } = require('@babel/generator');
const { createMacro } = require('babel-plugin-macros');

module.exports = createMacro(
  ({ babel: { types: t }, references, config: { codeOnly = false } }) => {
    if (!references.default) {
      return;
    }

    references.default.forEach(({ parentPath }) => {
      const value = parentPath.node.arguments[0] || t.identifier('undefined');
      const code = t.stringLiteral(
        generate(value, { retainLines: true }).code.replace(/^\n+/, ''),
      );

      return parentPath.replaceWith(
        codeOnly
          ? code
          : t.objectExpression([
              t.objectProperty(t.identifier('code'), code),
              t.objectProperty(t.identifier('value'), value),
            ]),
      );
    });
  },
  { configName: 'source' },
);
