const { default: generate } = require('@babel/generator');
const prettier = require('@prettier/sync');
const { createMacro } = require('babel-plugin-macros');

module.exports = createMacro(
  ({
    babel: { types: t },
    references,
    config: { codeOnly = false, formatWithPrettier = true },
  }) => {
    if (!references.default) {
      return;
    }

    references.default.forEach(({ parentPath }) => {
      const value = parentPath.node.arguments[0] || t.identifier('undefined');
      let { code } = generate(value, { retainLines: true });

      if (formatWithPrettier) {
        code = prettier
          .format(code, {
            parser: 'typescript',
            semi: false,
          })
          .replace(/^;/, ''); // Remove leading semicolons from JSX
      }

      const codeAst = t.stringLiteral(code.trim());

      return parentPath.replaceWith(
        codeOnly
          ? codeAst
          : t.objectExpression([
              t.objectProperty(t.identifier('code'), codeAst),
              t.objectProperty(t.identifier('value'), value),
            ]),
      );
    });
  },
  { configName: 'source' },
);
