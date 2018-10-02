import {
  alert,
  completion,
  grey1,
  grey4,
  blue2,
  white
} from './private/palette';

export default {
  '.currentColor': { fill: 'currentColor' },
  '.formAccent': { fill: blue2 },
  '.formAccentDisabled': { fill: grey4 },
  '.critical': { fill: alert },
  '.positive': { fill: completion },
  '.secondary': { fill: grey1 },
  '.white': { fill: white }
};
