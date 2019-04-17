declare module 'treat/theme' {
  type Tokens = import('../lib/themes/theme').Tokens;

  export interface Theme {
    tokens: Tokens;
  }
}
