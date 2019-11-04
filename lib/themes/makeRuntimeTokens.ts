import { TreatTokens } from './makeTreatTheme';
import values from 'lodash/values';

const makeWebFonts = (tokens: TreatTokens) => {
  const name = tokens.typography.webFont;

  if (!name) {
    return [];
  }

  const weights = values(tokens.typography.fontWeight);
  const linkTag = `<link href="https://fonts.googleapis.com/css?family=${name}:${weights
    .sort()
    .join(',')}" rel="stylesheet" />`;

  return [{ linkTag }];
};

export default function makeRuntimeTokens(tokens: TreatTokens) {
  return { webFonts: makeWebFonts(tokens) };
}

export type RuntimeTokens = ReturnType<typeof makeRuntimeTokens>;
