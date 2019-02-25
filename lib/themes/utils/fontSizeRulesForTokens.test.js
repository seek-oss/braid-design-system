import fontSizeRulesForTokens from './fontSizeRulesForTokens';
import testForEachTheme from './testForEachTheme';

describe('fontSizeRulesForTokens', () => {
  testForEachTheme(({ theme }) => {
    test('Rules', () => {
      expect(
        fontSizeRulesForTokens({ tokens: theme.tokens })
      ).toMatchSnapshot();
    });
  });
});
