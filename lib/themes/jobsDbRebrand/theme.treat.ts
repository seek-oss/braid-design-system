import makeTreatTheme from '../makeTreatTheme';
import makeRuntimeTokens from '../makeRuntimeTokens';
import tokens from './tokens';

export const treatTheme = makeTreatTheme(tokens);
export const runtimeTokens = makeRuntimeTokens(tokens);
