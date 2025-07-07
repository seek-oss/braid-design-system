import { makeModes } from './makeModes';

describe('makeMode', () => {
  it('should enable only the given viewports', () => {
    const testMakeModes = makeModes(
      ['apac'],
      { small: 300, large: 1200 },
      {
        defaultThemes: ['apac'],
      },
    );

    expect(testMakeModes({ viewports: ['small'] })).toMatchInlineSnapshot(`
      {
        "apac large": {
          "disabled": true,
        },
        "apac small": {
          "theme": "apac",
          "viewport": 300,
        },
      }
    `);
  });

  it('should filter out modes when not disabling higher level modes', () => {
    const testMakeModes = makeModes(
      ['apac', 'apacDark'],
      { small: 300, large: 1200 },
      {
        defaultThemes: ['apac'],
      },
    );

    expect(
      testMakeModes({ viewports: ['small'], disableHigherLevelModes: false }),
    ).toMatchInlineSnapshot(`
      {
        "apac small": {
          "theme": "apac",
          "viewport": 300,
        },
      }
    `);
  });

  it('should accept multiple themes and viewports', () => {
    const testMakeModes = makeModes(
      ['apac', 'apacDark'],
      { small: 300, large: 1200 },
      {
        defaultThemes: [],
      },
    );

    expect(
      testMakeModes({
        viewports: ['small', 'large'],
        themes: ['apac', 'apacDark'],
      }),
    ).toMatchInlineSnapshot(`
      {
        "apac large": {
          "theme": "apac",
          "viewport": 1200,
        },
        "apac small": {
          "theme": "apac",
          "viewport": 300,
        },
        "apacDark large": {
          "theme": "apacDark",
          "viewport": 1200,
        },
        "apacDark small": {
          "theme": "apacDark",
          "viewport": 300,
        },
      }
    `);
  });
});
