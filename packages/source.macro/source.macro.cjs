const { default: generate } = require('@babel/generator');
const prettier = require('@prettier/sync');
const { createMacro } = require('babel-plugin-macros');

module.exports = createMacro(
  ({ babel: { types: t }, references, config: { codeOnly = false } }) => {
    if (!references.default) {
      return;
    }

    references.default.forEach(({ parentPath }) => {
      const value = parentPath.node.arguments[0] || t.identifier('undefined');
      const generatedCode = generate(value, { retainLines: true });
      const formattedCode = prettier
        .format(generatedCode.code, {
          parser: 'typescript',
          semi: false,
        })
        .replace(/^;/, '') // Remove leading semicolons from JSX
        .trim();

      const codeAst = t.stringLiteral(formattedCode);

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
