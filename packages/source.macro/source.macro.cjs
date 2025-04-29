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
      let { code } = generatedCode;

      const optionsPath = parentPath.get('arguments.1');
      const macroOptions = { formatWithPrettier: true };

      if (optionsPath) {
        const { confident, value: optionsValue } = optionsPath.evaluate();

        if (
          confident &&
          'formatWithPrettier' in optionsValue &&
          optionsValue.formatWithPrettier === false
        ) {
          macroOptions.formatWithPrettier = optionsValue.formatWithPrettier;
        }
      }

      if (macroOptions.formatWithPrettier) {
        code = prettier
          .format(generatedCode.code, {
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
