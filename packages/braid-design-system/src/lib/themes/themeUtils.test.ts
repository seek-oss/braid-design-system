import { makeThemeUtils } from './themeUtils';

const mockTokens = {
  breakpoint: {
    mobile: 0,
    tablet: 500,
    desktop: 1000,
    wide: 1500,
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

      it('wide', () => {
        expect(
          responsiveStyle({
            wide: { content: 'wide' },
          }),
        ).toEqual({
          '@media': {
            'screen and (min-width: 1500px)': { content: 'wide' },
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

      it('mobile and wide', () => {
        expect(
          responsiveStyle({
            mobile: { content: 'mobile' },
            wide: { content: 'wide' },
          }),
        ).toEqual({
          content: 'mobile',
          '@media': {
            'screen and (min-width: 1500px)': { content: 'wide' },
          },
        });
      });

      it('tablet and wide', () => {
        expect(
          responsiveStyle({
            tablet: { content: 'tablet' },
            wide: { content: 'wide' },
          }),
        ).toEqual({
          '@media': {
            'screen and (min-width: 500px)': { content: 'tablet' },
            'screen and (min-width: 1500px)': { content: 'wide' },
          },
        });
      });
    });

    describe('all screens', () => {
      it('mobile, tablet, desktop and wide', () => {
        expect(
          responsiveStyle({
            mobile: { content: 'mobile' },
            tablet: { content: 'tablet' },
            desktop: { content: 'desktop' },
            wide: { content: 'wide' },
          }),
        ).toEqual({
          content: 'mobile',
          '@media': {
            'screen and (min-width: 500px)': { content: 'tablet' },
            'screen and (min-width: 1000px)': { content: 'desktop' },
            'screen and (min-width: 1500px)': { content: 'wide' },
          },
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
