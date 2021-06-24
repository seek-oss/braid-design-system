var linkVisited = 'DarkViolet';
var brand = '#1250C4';
var brandAccent = '#de0059';
var formAccent = brand;
var focus = brand;
var critical = '#e91b0c';
var positive = '#3b610f';
var caution = '#ffc600';
var info = brand;
var promote = '#5736ab';
var neutral = '#424242';
var secondary = '#737374';
var white = '#fff';
var link = brand;
var tokens = {
  name: 'Catho',
  displayName: 'Catho',
  typography: {
    fontFamily: "'Nunito Sans', sans-serif",
    webFont: 'Nunito Sans',
    fontMetrics: {
      capHeight: 705,
      ascent: 1011,
      descent: -353,
      lineGap: 0,
      unitsPerEm: 1000
    },
    fontWeight: {
      regular: 400,
      medium: 600,
      strong: 800
    },
    heading: {
      weight: {
        weak: 'regular',
        regular: 'medium'
      },
      level: {
        '1': {
          mobile: {
            fontSize: 36,
            rows: 12
          },
          tablet: {
            fontSize: 36,
            rows: 12
          }
        },
        '2': {
          mobile: {
            fontSize: 28,
            rows: 10
          },
          tablet: {
            fontSize: 28,
            rows: 10
          }
        },
        '3': {
          mobile: {
            fontSize: 24,
            rows: 9
          },
          tablet: {
            fontSize: 24,
            rows: 9
          }
        },
        '4': {
          mobile: {
            fontSize: 20,
            rows: 7
          },
          tablet: {
            fontSize: 20,
            rows: 7
          }
        }
      }
    },
    text: {
      xsmall: {
        mobile: {
          fontSize: 12,
          rows: 4
        },
        tablet: {
          fontSize: 12,
          rows: 4
        }
      },
      small: {
        mobile: {
          fontSize: 14,
          rows: 4
        },
        tablet: {
          fontSize: 14,
          rows: 4
        }
      },
      standard: {
        mobile: {
          fontSize: 16,
          rows: 6
        },
        tablet: {
          fontSize: 16,
          rows: 6
        }
      },
      large: {
        mobile: {
          fontSize: 18,
          rows: 6
        },
        tablet: {
          fontSize: 18,
          rows: 6
        }
      }
    }
  },
  contentWidth: {
    xsmall: 400,
    small: 660,
    medium: 984,
    large: 1180
  },
  grid: 4,
  touchableSize: 11,
  space: {
    gutter: 6,
    xxsmall: 1,
    xsmall: 2,
    small: 3,
    medium: 4,
    large: 6,
    xlarge: 12,
    xxlarge: 20
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
      standard: '#e0e0e0',
      standardInverted: white,
      field: '#999999',
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
      neutral: neutral,
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
      body: '#f2f2f2',
      brand: '#0037e9',
      input: white,
      inputDisabled: '#f2f2f2',
      brandAccent: brandAccent,
      formAccent: formAccent,
      formAccentDisabled: '#ccc',
      selection: '#f2f2f2',
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