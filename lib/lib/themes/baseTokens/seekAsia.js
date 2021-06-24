import merge from 'lodash/merge';
export var makeTokens = function makeTokens(_ref) {
  var name = _ref.name,
      displayName = _ref.displayName,
      bodyBackground = _ref.bodyBackground,
      brand = _ref.brand,
      brandAccent = _ref.brandAccent,
      formAccent = _ref.formAccent,
      _ref$tokenOverrides = _ref.tokenOverrides,
      tokenOverrides = _ref$tokenOverrides === void 0 ? {} : _ref$tokenOverrides;
  var white = '#fff';
  var blue2 = '#298EB9';
  var blue3 = '#94C9E0';
  var blue5 = '#EEF8FC';
  var alert = '#eb0000';
  var grey1 = '#333';
  var grey2 = '#666';
  var grey4 = '#ccc';
  var grey5 = '#eee';
  var candidate = '#0c4b85'; // SEEK Asia name for this color

  var info = candidate;
  var promote = '#923f92';
  var positive = '#498307';
  var critical = alert;
  var caution = '#ffc600';
  var focus = blue3;
  var link = blue2;
  var linkHover = blue2;
  var linkVisited = '#3f11a3';
  var selection = blue5;
  var secondary = grey2;
  var neutral = grey2;
  var tokens = {
    name: name,
    displayName: displayName,
    typography: {
      fontFamily: 'Muli, -apple-system, system-ui, "Segoe UI", Roboto, "Noto Sans", Ubuntu, "Droid Sans", "Helvetica Neue", Arial, sans-serif',
      webFont: 'Muli',
      fontMetrics: {
        capHeight: 712,
        ascent: 1005,
        descent: -250,
        lineGap: 0,
        unitsPerEm: 1000
      },
      fontWeight: {
        regular: 400,
        medium: 600,
        strong: 700
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
              rows: 9
            },
            tablet: {
              fontSize: 34,
              rows: 11
            }
          },
          '2': {
            mobile: {
              fontSize: 24,
              rows: 8
            },
            tablet: {
              fontSize: 28,
              rows: 9
            }
          },
          '3': {
            mobile: {
              fontSize: 20,
              rows: 7
            },
            tablet: {
              fontSize: 24,
              rows: 8
            }
          },
          '4': {
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
            rows: 5
          },
          tablet: {
            fontSize: 14,
            rows: 5
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
      medium: 940,
      large: 1280
    },
    grid: 4,
    touchableSize: 10,
    space: {
      gutter: 5,
      xxsmall: 1,
      xsmall: 2,
      small: 3,
      medium: 4,
      large: 6,
      xlarge: 8,
      xxlarge: 16
    },
    transforms: {
      touchable: 'scale(0.98)'
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
        standard: grey4,
        standardInverted: white,
        field: grey4,
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
        linkHover: linkHover,
        linkVisited: linkVisited,
        neutral: grey1,
        neutralInverted: white,
        formAccent: formAccent,
        brandAccent: brandAccent,
        critical: critical,
        caution: caution,
        positive: positive,
        info: info,
        promote: promote,
        secondary: secondary,
        secondaryInverted: 'hsla(0, 0%, 100%, 0.65)',
        rating: '#ff9000'
      },
      background: {
        body: bodyBackground,
        brand: brand,
        input: white,
        inputDisabled: grey5,
        brandAccent: brandAccent,
        formAccent: formAccent,
        formAccentDisabled: grey4,
        selection: selection,
        card: white,
        critical: critical,
        caution: caution,
        positive: positive,
        neutral: neutral,
        info: info,
        promote: promote
      }
    }
  };
  return merge(tokens, tokenOverrides);
};