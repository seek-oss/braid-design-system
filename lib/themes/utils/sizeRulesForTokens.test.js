import sizeRulesForTokens from './sizeRulesForTokens';
import testForEachTheme from './testForEachTheme';

describe('sizeRulesForTokens', () => {
  testForEachTheme(({ theme }) => {
    test('Rules', () => {
      expect(
        sizeRulesForTokens({ tokens: theme.tokens, property: 'width' })
      ).toMatchSnapshot();
    });
  });
});
