import { setChromatic } from './chromatic';

describe('setChromatic', () => {
  it('should return defaults for root mode', () => {
    expect(setChromatic({ root: true })).toMatchInlineSnapshot(`
      {
        "modes": {
          "seekJobs mobile": {
            "colourMode": "light",
            "theme": "seekJobs",
            "viewport": 320,
          },
          "seekJobsDark mobile": {
            "colourMode": "dark",
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
          "seekJobs desktop": {
            "disabled": true,
          },
          "seekJobs mobile": {
            "colourMode": "light",
            "theme": "seekJobs",
            "viewport": 320,
          },
          "seekJobs tablet": {
            "disabled": true,
          },
          "seekJobs wide": {
            "disabled": true,
          },
          "seekJobsDark desktop": {
            "disabled": true,
          },
          "seekJobsDark mobile": {
            "colourMode": "dark",
            "theme": "seekJobs",
            "viewport": 320,
          },
          "seekJobsDark tablet": {
            "disabled": true,
          },
          "seekJobsDark wide": {
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
          "seekJobs desktop": {
            "disabled": true,
          },
          "seekJobs mobile": {
            "disabled": true,
          },
          "seekJobs tablet": {
            "colourMode": "light",
            "theme": "seekJobs",
            "viewport": 768,
          },
          "seekJobs wide": {
            "disabled": true,
          },
          "seekJobsDark desktop": {
            "disabled": true,
          },
          "seekJobsDark mobile": {
            "disabled": true,
          },
          "seekJobsDark tablet": {
            "colourMode": "dark",
            "theme": "seekJobs",
            "viewport": 768,
          },
          "seekJobsDark wide": {
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
            "seekJobs desktop": {
              "colourMode": "light",
              "theme": "seekJobs",
              "viewport": 992,
            },
            "seekJobs mobile": {
              "colourMode": "light",
              "theme": "seekJobs",
              "viewport": 320,
            },
            "seekJobs tablet": {
              "colourMode": "light",
              "theme": "seekJobs",
              "viewport": 768,
            },
            "seekJobs wide": {
              "colourMode": "light",
              "theme": "seekJobs",
              "viewport": 1200,
            },
            "seekJobsDark desktop": {
              "colourMode": "dark",
              "theme": "seekJobs",
              "viewport": 992,
            },
            "seekJobsDark mobile": {
              "colourMode": "dark",
              "theme": "seekJobs",
              "viewport": 320,
            },
            "seekJobsDark tablet": {
              "colourMode": "dark",
              "theme": "seekJobs",
              "viewport": 768,
            },
            "seekJobsDark wide": {
              "colourMode": "dark",
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
          "seekJobsDark desktop": {
            "disabled": true,
          },
          "seekJobsDark mobile": {
            "disabled": true,
          },
          "seekJobsDark tablet": {
            "disabled": true,
          },
          "seekJobsDark wide": {
            "disabled": true,
          },
          "wireframe desktop": {
            "disabled": true,
          },
          "wireframe mobile": {
            "colourMode": "light",
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
            "seekJobsDark desktop": {
              "disabled": true,
            },
            "seekJobsDark mobile": {
              "disabled": true,
            },
            "seekJobsDark tablet": {
              "disabled": true,
            },
            "seekJobsDark wide": {
              "disabled": true,
            },
            "wireframe desktop": {
              "disabled": true,
            },
            "wireframe mobile": {
              "disabled": true,
            },
            "wireframe tablet": {
              "colourMode": "light",
              "theme": "wireframe",
              "viewport": 768,
            },
            "wireframe wide": {
              "colourMode": "light",
              "theme": "wireframe",
              "viewport": 1200,
            },
          },
        }
      `);
  });
});
