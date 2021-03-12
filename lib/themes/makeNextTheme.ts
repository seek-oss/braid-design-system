import { createThemeVars, createTheme } from '@mattsjones/css-core';
const breakpoints = ['mobile', 'tablet', 'desktop'] as const;
const headingLevels = ['1', '2', '3', '4'] as const;
const textSizes = ['xsmall', 'small', 'standard', 'large'] as const;
type Breakpoint = typeof breakpoints[number];
type TextBreakpoint = Exclude<Breakpoint, 'desktop'>;
type TextDefinition = Record<
  TextBreakpoint,
  {
    fontSize: number;
    leading: number;
  }
>;

const textContract = {
  mobile: {
    fontSize: null,
    leading: null,
  },
  tablet: {
    fontSize: null,
    leading: null,
  },
} as const;

const themeVars = createThemeVars({
  typography: {
    fontWeight: {
      regular: null,
      medium: null,
      strong: null,
    },
    heading: {
      level: {
        1: textContract,
        2: textContract,
        3: textContract,
        4: textContract,
      },
    },
    text: {
      xsmall: textContract,
      small: textContract,
      standard: textContract,
      large: textContract,
    },
  },
  palette: {
    black: null,
    white: null,
    critical: null,
    positive: null,
    info: null,
    promote: null,
    caution: null,
    brandAccent: null,
    formAccent: null,
    focus: null,
    link: null,
    linkVisited: null,
    secondary: null,
    neutral: null,
    rating: null,
  },
});
interface Tokens {
  typography: {
    fontWeight: Record<keyof typeof themeVars.typography.fontWeight, string>;
    heading: {
      weight: {
        weak: keyof typeof themeVars.typography.fontWeight;
        regular: keyof typeof themeVars.typography.fontWeight;
      };
      level: Record<typeof headingLevels[number], TextDefinition>;
    };
    text: Record<typeof textSizes[number], TextDefinition>;
  };
  palette: {
    black: string;
    white: string;
    critical: string;
    positive: string;
    info: string;
    promote: string;
    caution: string;
    brandAccent: string;
    formAccent: string;
    focus: string;
    link: string;
    linkVisited: string;
    secondary: string;
    neutral: string;
    rating: string;
  };
}
export default (tokens: Tokens) => {
  const resolvedTokens = {
    ...tokens,
    typography: {
      ...tokens.typography,
      heading: {
        ...tokens.typography.heading,
        weight: {
          weak:
            themeVars.typography.fontWeight[
              tokens.typography.heading.weight.weak
            ],
          regular:
            themeVars.typography.fontWeight[
              tokens.typography.heading.weight.regular
            ],
        },
      },
    },
  };

  return createTheme(themeVars, resolvedTokens);
};
