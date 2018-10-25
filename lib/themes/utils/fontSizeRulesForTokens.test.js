import fontSizeRulesForTokens from './fontSizeRulesForTokens';
import forEachTheme from '../../test/utils/forEachTheme';

describe('fontSizeRulesForTokens', () => {
  forEachTheme(({ theme }) => {
    test('Rules', () => {
      expect(
        fontSizeRulesForTokens({ tokens: theme.tokens })
      ).toMatchSnapshot();
    });
  });
});
