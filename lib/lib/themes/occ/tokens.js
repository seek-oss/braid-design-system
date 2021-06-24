import { lighten } from 'polished';
var brand = '#083cae';
var brandAccent = '#f13465';
var formAccent = brand;
var focus = lighten(0.5, brand);
var critical = '#db3737';
var positive = '#009537';
var caution = '#ffc549';
var info = '#0946CB';
var promote = '#5736ab';
var neutral = '#666';
var black = '#222';
var secondary = '#777';
var white = '#fff';
var link = '#0946CB';
var linkVisited = '#5736ab';
var tokens = {
  name: 'OCC',
  displayName: 'OCC Mundial',
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    webFont: 'Open Sans',
    fontMetrics: {
      capHeight: 1462,
      ascent: 2189,
      descent: -600,
      lineGap: 0,
      unitsPerEm: 2048
    },
    fontWeight: {
      regular: 400,
      medium: 600,
      // Not implemented rolling up to strong for consistency.
      strong: 600
    },
    heading: {
      weight: {
        weak: 'regular',
        regular: 'strong'
      },
      level: {
        '1': {
          mobile: {
            fontSize: 28,
            rows: 8
          },
          tablet: {
            fontSize: 57,
            rows: 18
          }
        },
        '2': {
          mobile: {
            fontSize: 28,
            rows: 8
          },
          tablet: {
            fontSize: 36,
            rows: 12
          }
        },
        '3': {
          mobile: {
            fontSize: 22,
            rows: 8
          },
          tablet: {
            fontSize: 22,
            rows: 8
          }
        },
        '4': {
          mobile: {
            fontSize: 16,
            rows: 6
          },
          tablet: {
            fontSize: 16,
            rows: 6
          }
        }
      }
    },
    text: {
      xsmall: {
        mobile: {
          fontSize: 10,
          rows: 4
        },
        tablet: {
          fontSize: 10,
          rows: 4
        }
      },
      small: {
        mobile: {
          fontSize: 12,
          rows: 4
        },
        tablet: {
          fontSize: 12,
          rows: 4
        }
      },
      standard: {
        mobile: {
          fontSize: 14,
          rows: 6
        },
        tablet: {
          fontSize: 14,
          rows: 6
        }
      },
      large: {
        mobile: {
          fontSize: 16,
          rows: 6
        },
        tablet: {
          fontSize: 16,
          rows: 6
        }
      }
    }
  },
  contentWidth: {
    xsmall: 400,
    small: 660,
    medium: 984,
    large: 1164
  },
  grid: 4,
  touchableSize: 11,
  space: {
    gutter: 6,
    xxsmall: 1,
    xsmall: 2,
    small: 4,
    medium: 6,
    large: 8,
    xlarge: 12,
    xxlarge: 16
  },
  transforms: {
    touchable: 'scale(0.97)'
  },
  transitions: {
    fast: 'transform .125s ease, opacity .125s ease',
    touchable: 'transform 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235)'
  },
  border: {
    radius: {
      standard: '4px'
    },
    width: {
      standard: 1,
      large: 2
    },
    color: {
      standard: '#dddddd',
      standardInverted: white,
      field: '#dddddd',
      focus: focus,
      critical: critical,
      info: info,
      promote: promote,
      positive: positive,
      caution: caution,
      formHover: formAccent,
      formAccent: formAccent,
      brandAccent: brandAccent
    }
  },
  shadows: {
    small: '0 2px 4px 0px rgba(28,28,28,.1), 0 2px 2px -2px rgba(28,28,28,.1), 0 4px 4px -4px rgba(28,28,28,.2)',
    medium: '0 2px 4px 0px rgba(28,28,28,.1), 0 8px 8px -4px rgba(28,28,28,.1), 0 12px 12px -8px rgba(28,28,28,.2)',
    large: '0 2px 4px 0px rgba(28,28,28,.1), 0 12px 12px -4px rgba(28,28,28,.1), 0 20px 20px -12px rgba(28,28,28,.2)'
  },
  color: {
    foreground: {
      link: link,
      linkHover: link,
      linkVisited: linkVisited,
      neutral: black,
      neutralInverted: white,
      formAccent: formAccent,
      brandAccent: brandAccent,
      critical: critical,
      info: info,
      promote: promote,
      caution: caution,
      positive: positive,
      secondary: secondary,
      secondaryInverted: 'hsla(0, 0%, 100%, 0.65)',
      rating: '#f36e23'
    },
    background: {
      body: '#f5f5f8',
      brand: brand,
      input: white,
      inputDisabled: '#eee',
      brandAccent: brandAccent,
      formAccent: formAccent,
      formAccentDisabled: '#ccc',
      selection: '#fafafa',
      card: white,
      critical: critical,
      caution: caution,
      info: info,
      promote: promote,
      positive: positive,
      neutral: neutral
    }
  }
};
export default tokens;