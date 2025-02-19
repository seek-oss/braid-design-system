import merge from 'lodash.merge';
import { lighten, darken, tint } from 'polished';
import type { DeepPartial } from 'utility-types';

import seekJobs from '../seekJobs/tokens';
import type { BraidTokens } from '../tokenType';

const brandAccent = '#007BC3';
const brandAccentLight = '#a8dfff';

const tokens: DeepPartial<BraidTokens> = {
  name: 'seekBusiness',
  displayName: 'SEEK Business',
  border: {
    color: {
      brandAccent,
      brandAccentLight,
    },
  },
  color: {
    foreground: {
      brandAccent,
      brandAccentLight,
    },
    background: {
      brandAccent,
      brandAccentActive: darken(0.05, brandAccent),
      brandAccentHover: lighten(0.05, brandAccent),
      brandAccentSoft: tint(0.925, brandAccent),
      brandAccentSoftActive: tint(0.85, brandAccent),
      brandAccentSoftHover: tint(0.9, brandAccent),
    },
  },
};

export default merge(seekJobs, tokens);
