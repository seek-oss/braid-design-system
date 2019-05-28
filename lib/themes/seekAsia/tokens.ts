import { Tokens } from '../../themes/theme';

const tokens: Tokens = {
  rowHeight: 4,
  columnWidth: 4,
  touchableRows: 10,
  responsiveBreakpoint: 768,
  descenderHeightScale: 0.13,
  heading: {
    level1: {
      regular: 'strong',
      weak: 'medium',
      mobile: {
        size: 28,
        rows: 9,
      },
      desktop: {
        size: 34,
        rows: 11,
      },
    },
    level2: {
      regular: 'strong',
      weak: 'medium',
      mobile: {
        size: 24,
        rows: 8,
      },
      desktop: {
        size: 28,
        rows: 9,
      },
    },
    level3: {
      regular: 'strong',
      weak: 'medium',
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
  text: {
    small: {
      mobile: {
        size: 14,
        rows: 5,
      },
      desktop: {
        size: 14,
        rows: 5,
      },
    },
    standard: {
      mobile: {
        size: 16,
        rows: 6,
      },
      desktop: {
        size: 16,
        rows: 6,
      },
    },
    large: {
      mobile: {
        size: 18,
        rows: 6,
      },
      desktop: {
        size: 18,
        rows: 6,
      },
    },
  },
  rowSpacing: {
    xxsmall: 1,
    xsmall: 2,
    small: 3,
    medium: 4,
    large: 6,
    xlarge: 8,
    xxlarge: 16,
  },
  columnSpacing: {
    gutter: 5,
    xxsmall: 1,
    xsmall: 2,
    small: 3,
    medium: 4,
    large: 6,
    xlarge: 8,
    xxlarge: 16,
  },
};

export default tokens;
