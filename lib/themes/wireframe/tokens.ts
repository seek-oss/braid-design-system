import { Tokens } from '../theme';

const tokens: Tokens = {
  rowHeight: 6,
  columnWidth: 5,
  interactionRows: 8,
  responsiveBreakpoint: 768,
  descenderHeightScale: 0.16,
  heading: {
    level1: {
      regular: 'medium',
      weak: 'regular',
      mobile: {
        size: 28,
        rows: 6,
      },
      desktop: {
        size: 42,
        rows: 8,
      },
    },
    level2: {
      regular: 'medium',
      weak: 'regular',
      mobile: {
        size: 21,
        rows: 5,
      },
      desktop: {
        size: 28,
        rows: 6,
      },
    },
    level3: {
      regular: 'medium',
      weak: 'regular',
      mobile: {
        size: 21,
        rows: 5,
      },
      desktop: {
        size: 21,
        rows: 5,
      },
    },
  },
  text: {
    standard: {
      mobile: {
        size: 16,
        rows: 4,
      },
      desktop: {
        size: 16,
        rows: 4,
      },
    },
    large: {
      mobile: {
        size: 18,
        rows: 4,
      },
      desktop: {
        size: 18,
        rows: 4,
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
  borderWidth: {
    standard: 1,
  },
};

export default tokens;
