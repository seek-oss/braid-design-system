import { ThemeRef } from 'sku/treat';
import { RuntimeTokens } from './makeRuntimeTokens';

interface Theme extends RuntimeTokens {
  readonly name: string;
  readonly background: string;
  readonly treatTheme: ThemeRef;
}
