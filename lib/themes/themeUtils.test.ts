import { makeThemeUtils } from './themeUtils';

const mockTokens = {
  breakpoint: {
    mobile: 0,
    tablet: 500,
    desktop: 1000,
  },
} as const;

const { responsiveStyle } = makeThemeUtils(mockTokens);

describe('themeUtils', () => {
  describe('responsiveStyle', () => {
    describe('1 screen', () => {
      it('mobile', () => {
        expect(
          responsiveStyle({
            mobile: { content: 'mobile' },
          }),
        ).toEqual({
          content: 'mobile',
        });
      });

      it('tablet', () => {
        expect(
          responsiveStyle({
            tablet: { content: 'tablet' },
          }),
        ).toEqual({
          '@media': {
            'screen and (min-width: 500px)': { content: 'tablet' },
          },
        });
      });

      it('desktop', () => {
        expect(
          responsiveStyle({
            desktop: { content: 'desktop' },
          }),
        ).toEqual({
          '@media': {
            'screen and (min-width: 1000px)': { content: 'desktop' },
          },
        });
      });
    });

    describe('2 screens', () => {
      it('mobile and tablet', () => {
        expect(
          responsiveStyle({
            mobile: { content: 'mobile' },
            tablet: { content: 'tablet' },
          }),
        ).toEqual({
          content: 'mobile',
          '@media': {
            'screen and (min-width: 500px)': { content: 'tablet' },
          },
        });
      });

      it('mobile and tablet, deduped', () => {
        expect(
          responsiveStyle({
            mobile: { content: 'mobile' },
            tablet: { content: 'mobile' },
          }),
        ).toEqual({
          content: 'mobile',
        });
      });

      it('mobile and desktop', () => {
        expect(
          responsiveStyle({
            mobile: { content: 'mobile' },
            desktop: { content: 'desktop' },
          }),
        ).toEqual({
          content: 'mobile',
          '@media': {
            'screen and (min-width: 1000px)': { content: 'desktop' },
          },
        });
      });

      it('mobile and desktop, deduped', () => {
        expect(
          responsiveStyle({
            mobile: { content: 'mobile' },
            desktop: { content: 'mobile' },
          }),
        ).toEqual({
          content: 'mobile',
        });
      });

      it('tablet and desktop', () => {
        expect(
          responsiveStyle({
            tablet: { content: 'tablet' },
            desktop: { content: 'desktop' },
          }),
        ).toEqual({
          '@media': {
            'screen and (min-width: 500px)': { content: 'tablet' },
            'screen and (min-width: 1000px)': { content: 'desktop' },
          },
        });
      });

      it('tablet and desktop, deduped', () => {
        expect(
          responsiveStyle({
            tablet: { content: 'tablet' },
            desktop: { content: 'tablet' },
          }),
        ).toEqual({
          '@media': {
            'screen and (min-width: 500px)': { content: 'tablet' },
          },
        });
      });
    });

    describe('3 screens', () => {
      it('mobile, tablet and desktop', () => {
        expect(
          responsiveStyle({
            mobile: { content: 'mobile' },
            tablet: { content: 'tablet' },
            desktop: { content: 'desktop' },
          }),
        ).toEqual({
          content: 'mobile',
          '@media': {
            'screen and (min-width: 500px)': { content: 'tablet' },
            'screen and (min-width: 1000px)': { content: 'desktop' },
          },
        });
      });

      it('mobile, tablet and desktop, deduping tablet', () => {
        expect(
          responsiveStyle({
            mobile: { content: 'mobile' },
            tablet: { content: 'mobile' },
            desktop: { content: 'desktop' },
          }),
        ).toEqual({
          content: 'mobile',
          '@media': {
            'screen and (min-width: 1000px)': { content: 'desktop' },
          },
        });
      });

      it('mobile, tablet and desktop, deduping tablet and desktop', () => {
        expect(
          responsiveStyle({
            mobile: { content: 'mobile' },
            tablet: { content: 'mobile' },
            desktop: { content: 'mobile' },
          }),
        ).toEqual({
          content: 'mobile',
        });
      });
    });

    describe('0 screens', () => {
      it('works', () => {
        expect(responsiveStyle({})).toEqual({});
      });
    });
  });
});
