import { TreatTokens } from '../makeTreatTheme';

interface SeekAsiaBrandTokens {
  name: 'jobStreet' | 'jobStreetClassic' | 'jobsDb';
  brandAccent: string;
  formAccent: string;
}
export default ({
  name,
  brandAccent,
  formAccent,
}: SeekAsiaBrandTokens): TreatTokens => {
  const classic = name === 'jobStreetClassic';

  const white = '#fff';
  const black = classic ? '#333' : '#000';
  const blue2 = '#298EB9';
  const blue3 = '#94C9E0';
  const blue5 = '#EEF8FC';
  const alert = '#eb0000';
  const grey1 = '#333';
  const grey2 = '#666';
  const grey4 = '#ccc';
  const candidate = '#0c4b85'; // SEEK Asia name for this color
  const info = classic ? '#142d69' : candidate;
  const positive = '#498307';
  const critical = alert;
  const focus = blue3;
  const link = classic ? '#1c3f94' : blue2;
  const linkHover = classic ? '#142d69' : blue2;
  const selection = classic ? '#E8EBF4' : blue5;

  return {
    name,
    typography: {
      fontFamily: classic
        ? '"Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif'
        : 'Muli, -apple-system, system-ui, "Segoe UI", Roboto, "Noto Sans", Ubuntu, "Droid Sans", "Helvetica Neue", Arial, sans-serif',
      descenderHeightScale: 0.13,
      fontWeight: {
        regular: 400,
        medium: 500,
        strong: 700,
      },
      heading: {
        weight: {
          weak: 'medium',
          regular: 'strong',
        },
        level: {
          '1': {
            mobile: {
              size: 28,
              rows: 9,
            },
            desktop: {
              size: 34,
              rows: 11,
            },
          },
          '2': {
            mobile: {
              size: 24,
              rows: 8,
            },
            desktop: {
              size: 28,
              rows: 9,
            },
          },
          '3': {
            mobile: {
              size: 20,
              rows: 7,
            },
            desktop: {
              size: 24,
              rows: 8,
            },
          },
        },
      },
      text: {
        small: {
          mobile: {
            size: classic ? 12 : 14,
            rows: classic ? 5 : 5,
          },
          desktop: {
            size: classic ? 12 : 14,
            rows: classic ? 5 : 5,
          },
        },
        standard: {
          mobile: {
            size: classic ? 14 : 16,
            rows: classic ? 5 : 6,
          },
          desktop: {
            size: classic ? 14 : 16,
            rows: classic ? 5 : 6,
          },
        },
        large: {
          mobile: {
            size: classic ? 16 : 18,
            rows: classic ? 6 : 6,
          },
          desktop: {
            size: classic ? 16 : 18,
            rows: classic ? 6 : 6,
          },
        },
      },
    },
    grid: {
      row: 4,
      column: 4,
    },
    responsiveBreakpoint: 768,
    spacing: {
      touchableRows: 10,
      row: {
        xxsmall: 1,
        xsmall: 2,
        small: 3,
        medium: 4,
        large: 6,
        xlarge: 8,
        xxlarge: 16,
      },
      column: {
        gutter: 5,
        xxsmall: 1,
        xsmall: 2,
        small: 3,
        medium: 4,
        large: 6,
        xlarge: 8,
        xxlarge: 16,
      },
    },
    transforms: {
      touchable: 'scale(0.98)',
    },
    transitions: {
      fast: 'transform .125s ease, opacity .125s ease',
      touchable: 'transform 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235)',
    },
    border: {
      radius: {
        standard: '4px',
      },
      width: {
        standard: 1,
        large: 2,
      },
      color: {
        standard: grey4,
        focus,
        critical,
        formAccent,
      },
    },
    color: {
      foreground: {
        link,
        linkHover,
        black,
        neutral: grey1,
        formAccent,
        critical,
        info,
        positive,
        secondary: grey2,
        white,
      },
      background: {
        input: white,
        inputDisabled: grey4,
        brandAccent,
        formAccent,
        formAccentDisabled: grey4,
        selection,
        card: white,
        critical,
        info,
        positive,
      },
    },
  };
};
