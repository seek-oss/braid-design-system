/* tslint:disable */
declare module 'treat/theme' {
  type BraidTheme = import('./makeTreatTheme').TreatTheme;

  export interface Theme extends BraidTheme {}
}
