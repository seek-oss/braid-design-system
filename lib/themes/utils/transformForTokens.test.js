import transformForTokens from './transformForTokens';
import testForEachTheme from './testForEachTheme';

describe('transformForTokens', () => {
  testForEachTheme(({ theme }) => {
    test('Rules', () => {
      expect(
        transformForTokens({
          tokens: theme.tokens
        })
      ).toMatchSnapshot();
    });
  });
});
