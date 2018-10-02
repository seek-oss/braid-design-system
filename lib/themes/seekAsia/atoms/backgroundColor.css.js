import {
  alertBackground,
  white,
  grey4,
  blue5,
  completion,
  candidate
} from './private/palette';

export default {
  '.input': { background: white },
  '.inputDisabled': { background: grey4 },
  '.formAccent': { background: completion },
  '.formAccentDisabled': { background: grey4 },
  '.selection': { background: blue5 },
  '.info': { background: candidate },
  '.card': { background: white },
  '.critical': { background: alertBackground }
};
