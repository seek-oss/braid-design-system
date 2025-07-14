import { setChromatic } from './chromatic';

const { modes: themedModes } = setChromatic({
  viewports: ['mobile', 'tablet', 'desktop', 'wide'],
});

const { modes: wireframeMode } = setChromatic({
  viewports: ['mobile', 'tablet', 'desktop', 'wide'],
  wireframeOnly: true,
});

export const allModes = {
  ...themedModes,
  ...wireframeMode,
};
