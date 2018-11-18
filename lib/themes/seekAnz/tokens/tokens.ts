import { Tokens } from '../../theme';

const tokens: Tokens = {
  rowHeight: 6,
  columnWidth: 5,
  interactionRows: 8,
  responsiveBreakpoint: 740,
  descenderHeightScale: 0.16,
  text: {
    standard: {
      mobile: {
        size: 16,
        rows: 4
      },
      desktop: {
        size: 16,
        rows: 4
      }
    },
    large: {
      mobile: {
        size: 18,
        rows: 4
      },
      desktop: {
        size: 18,
        rows: 4
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
