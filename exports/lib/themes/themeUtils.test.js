import { makeThemeUtils } from './themeUtils';
const mockTokens = {
  breakpoint: {
    mobile: 0,
    tablet: 500,
    desktop: 1000
  }
};

const _makeThemeUtils = makeThemeUtils(mockTokens),
    responsiveStyle = _makeThemeUtils.responsiveStyle;

describe('themeUtils', function () {
  describe('responsiveStyle', function () {
    describe('1 screen', function () {
      it('mobile', function () {
        expect(responsiveStyle({
          mobile: {
            content: 'mobile'
          }
        })).toEqual({
          content: 'mobile'
        });
      });
      it('tablet', function () {
        expect(responsiveStyle({
          tablet: {
            content: 'tablet'
          }
        })).toEqual({
          '@media': {
            'screen and (min-width: 500px)': {
              content: 'tablet'
            }
          }
        });
      });
      it('desktop', function () {
        expect(responsiveStyle({
          desktop: {
            content: 'desktop'
          }
        })).toEqual({
          '@media': {
            'screen and (min-width: 1000px)': {
              content: 'desktop'
            }
          }
        });
      });
    });
    describe('2 screens', function () {
      it('mobile and tablet', function () {
        expect(responsiveStyle({
          mobile: {
            content: 'mobile'
          },
          tablet: {
            content: 'tablet'
          }
        })).toEqual({
          content: 'mobile',
          '@media': {
            'screen and (min-width: 500px)': {
              content: 'tablet'
            }
          }
        });
      });
      it('mobile and tablet, deduped', function () {
        expect(responsiveStyle({
          mobile: {
            content: 'mobile'
          },
          tablet: {
            content: 'mobile'
          }
        })).toEqual({
          content: 'mobile'
        });
      });
      it('mobile and desktop', function () {
        expect(responsiveStyle({
          mobile: {
            content: 'mobile'
          },
          desktop: {
            content: 'desktop'
          }
        })).toEqual({
          content: 'mobile',
          '@media': {
            'screen and (min-width: 1000px)': {
              content: 'desktop'
            }
          }
        });
      });
      it('mobile and desktop, deduped', function () {
        expect(responsiveStyle({
          mobile: {
            content: 'mobile'
          },
          desktop: {
            content: 'mobile'
          }
        })).toEqual({
          content: 'mobile'
        });
      });
      it('tablet and desktop', function () {
        expect(responsiveStyle({
          tablet: {
            content: 'tablet'
          },
          desktop: {
            content: 'desktop'
          }
        })).toEqual({
          '@media': {
            'screen and (min-width: 500px)': {
              content: 'tablet'
            },
            'screen and (min-width: 1000px)': {
              content: 'desktop'
            }
          }
        });
      });
      it('tablet and desktop, deduped', function () {
        expect(responsiveStyle({
          tablet: {
            content: 'tablet'
          },
          desktop: {
            content: 'tablet'
          }
        })).toEqual({
          '@media': {
            'screen and (min-width: 500px)': {
              content: 'tablet'
            }
          }
        });
      });
    });
    describe('3 screens', function () {
      it('mobile, tablet and desktop', function () {
        expect(responsiveStyle({
          mobile: {
            content: 'mobile'
          },
          tablet: {
            content: 'tablet'
          },
          desktop: {
            content: 'desktop'
          }
        })).toEqual({
          content: 'mobile',
          '@media': {
            'screen and (min-width: 500px)': {
              content: 'tablet'
            },
            'screen and (min-width: 1000px)': {
              content: 'desktop'
            }
          }
        });
      });
      it('mobile, tablet and desktop, deduping tablet', function () {
        expect(responsiveStyle({
          mobile: {
            content: 'mobile'
          },
          tablet: {
            content: 'mobile'
          },
          desktop: {
            content: 'desktop'
          }
        })).toEqual({
          content: 'mobile',
          '@media': {
            'screen and (min-width: 1000px)': {
              content: 'desktop'
            }
          }
        });
      });
      it('mobile, tablet and desktop, deduping tablet and desktop', function () {
        expect(responsiveStyle({
          mobile: {
            content: 'mobile'
          },
          tablet: {
            content: 'mobile'
          },
          desktop: {
            content: 'mobile'
          }
        })).toEqual({
          content: 'mobile'
        });
      });
    });
    describe('0 screens', function () {
      it('works', function () {
        expect(responsiveStyle({})).toEqual({});
      });
    });
  });
});