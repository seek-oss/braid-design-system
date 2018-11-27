import transformForTokens from './transformForTokens';
import forEachTheme from '../../test/utils/forEachTheme';

describe('transformForTokens', () => {
  forEachTheme(({ theme }) => {
    test('Rules', () => {
      expect(
        transformForTokens({
          tokens: theme.tokens
        })
      ).toMatchSnapshot();
    });
  });
});
