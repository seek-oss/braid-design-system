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
    smallest: 1,
    smaller: 2,
    small: 3,
    medium: 4,
    large: 5,
    larger: 8,
    largest: 12
  },
  columnSpacing: {
    gutter: 5,
    smallest: 1,
    smaller: 2,
    small: 3,
    medium: 4,
    large: 5,
    larger: 8,
    largest: 12
  },
  borderWidth: {
    standard: 1
  }
};

export default tokens;
