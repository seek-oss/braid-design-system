import sizeRulesForTokens from './sizeRulesForTokens';
import forEachTheme from '../../test/utils/forEachTheme';

describe('sizeRulesForTokens', () => {
  forEachTheme(({ theme }) => {
    test('Rules', () => {
      expect(
        sizeRulesForTokens({ tokens: theme.tokens, property: 'width' })
      ).toMatchSnapshot();
    });
  });
});
