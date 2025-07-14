import { setChromatic } from './chromatic';

describe('setChromatic', () => {
  it('should return defaults for root mode', () => {
    expect(setChromatic({ root: true })).toMatchInlineSnapshot(`
      {
        "modes": {
          "apac mobile": {
            "darkMode": false,
            "theme": "apac",
            "viewport": 320,
          },
          "seekJobs (dark) mobile": {
            "darkMode": true,
            "theme": "seekJobs",
            "viewport": 320,
          },
          "seekJobs mobile": {
            "darkMode": true,
            "theme": "seekJobs",
            "viewport": 320,
          },
        },
      }
    `);
  });

  it('should enable mobile viewport only by default', () => {
    expect(setChromatic()).toMatchInlineSnapshot(`
      {
        "modes": {
          "apac desktop": {
            "disabled": true,
          },
          "apac mobile": {
            "darkMode": false,
            "theme": "apac",
            "viewport": 320,
          },
          "apac tablet": {
            "disabled": true,
          },
          "apac wide": {
            "disabled": true,
          },
          "seekJobs (dark) desktop": {
            "disabled": true,
          },
          "seekJobs (dark) mobile": {
            "darkMode": true,
            "theme": "seekJobs",
            "viewport": 320,
          },
          "seekJobs (dark) tablet": {
            "disabled": true,
          },
          "seekJobs (dark) wide": {
            "disabled": true,
          },
          "seekJobs desktop": {
            "disabled": true,
          },
          "seekJobs mobile": {
            "darkMode": true,
            "theme": "seekJobs",
            "viewport": 320,
          },
          "seekJobs tablet": {
            "disabled": true,
          },
          "seekJobs wide": {
            "disabled": true,
          },
          "wireframe desktop": {
            "disabled": true,
          },
          "wireframe mobile": {
            "disabled": true,
          },
          "wireframe tablet": {
            "disabled": true,
          },
          "wireframe wide": {
            "disabled": true,
          },
        },
      }
    `);
  });

  it('should enable only the given viewports when one is provided', () => {
    expect(setChromatic({ viewports: ['tablet'] })).toMatchInlineSnapshot(`
      {
        "modes": {
          "apac desktop": {
            "disabled": true,
          },
          "apac mobile": {
            "disabled": true,
          },
          "apac tablet": {
            "darkMode": false,
            "theme": "apac",
            "viewport": 768,
          },
          "apac wide": {
            "disabled": true,
          },
          "seekJobs (dark) desktop": {
            "disabled": true,
          },
          "seekJobs (dark) mobile": {
            "disabled": true,
          },
          "seekJobs (dark) tablet": {
            "darkMode": true,
            "theme": "seekJobs",
            "viewport": 768,
          },
          "seekJobs (dark) wide": {
            "disabled": true,
          },
          "seekJobs desktop": {
            "disabled": true,
          },
          "seekJobs mobile": {
            "disabled": true,
          },
          "seekJobs tablet": {
            "darkMode": true,
            "theme": "seekJobs",
            "viewport": 768,
          },
          "seekJobs wide": {
            "disabled": true,
          },
          "wireframe desktop": {
            "disabled": true,
          },
          "wireframe mobile": {
            "disabled": true,
          },
          "wireframe tablet": {
            "disabled": true,
          },
          "wireframe wide": {
            "disabled": true,
          },
        },
      }
    `);
  });

  it('should enable only the given viewports when multiple are provided', () => {
    expect(setChromatic({ viewports: ['mobile', 'tablet', 'desktop', 'wide'] }))
      .toMatchInlineSnapshot(`
        {
          "modes": {
            "apac desktop": {
              "darkMode": false,
              "theme": "apac",
              "viewport": 992,
            },
            "apac mobile": {
              "darkMode": false,
              "theme": "apac",
              "viewport": 320,
            },
            "apac tablet": {
              "darkMode": false,
              "theme": "apac",
              "viewport": 768,
            },
            "apac wide": {
              "darkMode": false,
              "theme": "apac",
              "viewport": 1200,
            },
            "seekJobs (dark) desktop": {
              "darkMode": true,
              "theme": "seekJobs",
              "viewport": 992,
            },
            "seekJobs (dark) mobile": {
              "darkMode": true,
              "theme": "seekJobs",
              "viewport": 320,
            },
            "seekJobs (dark) tablet": {
              "darkMode": true,
              "theme": "seekJobs",
              "viewport": 768,
            },
            "seekJobs (dark) wide": {
              "darkMode": true,
              "theme": "seekJobs",
              "viewport": 1200,
            },
            "seekJobs desktop": {
              "darkMode": true,
              "theme": "seekJobs",
              "viewport": 992,
            },
            "seekJobs mobile": {
              "darkMode": true,
              "theme": "seekJobs",
              "viewport": 320,
            },
            "seekJobs tablet": {
              "darkMode": true,
              "theme": "seekJobs",
              "viewport": 768,
            },
            "seekJobs wide": {
              "darkMode": true,
              "theme": "seekJobs",
              "viewport": 1200,
            },
            "wireframe desktop": {
              "disabled": true,
            },
            "wireframe mobile": {
              "disabled": true,
            },
            "wireframe tablet": {
              "disabled": true,
            },
            "wireframe wide": {
              "disabled": true,
            },
          },
        }
      `);
  });

  it('should enable wireframe only for default viewports', () => {
    expect(setChromatic({ wireframeOnly: true })).toMatchInlineSnapshot(`
      {
        "modes": {
          "apac desktop": {
            "disabled": true,
          },
          "apac mobile": {
            "disabled": true,
          },
          "apac tablet": {
            "disabled": true,
          },
          "apac wide": {
            "disabled": true,
          },
          "seekJobs (dark) desktop": {
            "disabled": true,
          },
          "seekJobs (dark) mobile": {
            "disabled": true,
          },
          "seekJobs (dark) tablet": {
            "disabled": true,
          },
          "seekJobs (dark) wide": {
            "disabled": true,
          },
          "seekJobs desktop": {
            "disabled": true,
          },
          "seekJobs mobile": {
            "disabled": true,
          },
          "seekJobs tablet": {
            "disabled": true,
          },
          "seekJobs wide": {
            "disabled": true,
          },
          "wireframe desktop": {
            "disabled": true,
          },
          "wireframe mobile": {
            "darkMode": false,
            "theme": "wireframe",
            "viewport": 320,
          },
          "wireframe tablet": {
            "disabled": true,
          },
          "wireframe wide": {
            "disabled": true,
          },
        },
      }
    `);
  });

  it('should enable wireframe only for specified viewports', () => {
    expect(setChromatic({ viewports: ['tablet', 'wide'], wireframeOnly: true }))
      .toMatchInlineSnapshot(`
        {
          "modes": {
            "apac desktop": {
              "disabled": true,
            },
            "apac mobile": {
              "disabled": true,
            },
            "apac tablet": {
              "disabled": true,
            },
            "apac wide": {
              "disabled": true,
            },
            "seekJobs (dark) desktop": {
              "disabled": true,
            },
            "seekJobs (dark) mobile": {
              "disabled": true,
            },
            "seekJobs (dark) tablet": {
              "disabled": true,
            },
            "seekJobs (dark) wide": {
              "disabled": true,
            },
            "seekJobs desktop": {
              "disabled": true,
            },
            "seekJobs mobile": {
              "disabled": true,
            },
            "seekJobs tablet": {
              "disabled": true,
            },
            "seekJobs wide": {
              "disabled": true,
            },
            "wireframe desktop": {
              "disabled": true,
            },
            "wireframe mobile": {
              "disabled": true,
            },
            "wireframe tablet": {
              "darkMode": false,
              "theme": "wireframe",
              "viewport": 768,
            },
            "wireframe wide": {
              "darkMode": false,
              "theme": "wireframe",
              "viewport": 1200,
            },
          },
        }
      `);
  });
});
