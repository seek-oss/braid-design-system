import { Tokens } from '../../theme';

const tokens: Tokens = {
  rowHeight: 4,
  columnWidth: 4,
  interactionRows: 11,
  responsiveBreakpoint: 768,
  descenderHeightScale: 0.13,
  text: {
    standard: {
      mobile: {
        size: 16,
        rows: 6
      },
      desktop: {
        size: 16,
        rows: 6
      }
    },
    large: {
      mobile: {
        size: 18,
        rows: 6
      },
      desktop: {
        size: 20,
        rows: 7
      }
    }
  },
  rowSpacing: {
    xxsmall: 1,
    xsmall: 2,
    small: 3,
    medium: 4,
    large: 6,
    xlarge: 8,
    xxlarge: 16
  },
  columnSpacing: {
    gutter: 5,
    xxsmall: 1,
    xsmall: 2,
    small: 3,
    medium: 4,
    large: 6,
    xlarge: 8,
    xxlarge: 16
  },
  borderWidth: {
    standard: 1
  }
};

export default tokens;
