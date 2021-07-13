declare module 'treat/theme' {
  type TreatTheme = import('./makeBraidTheme').TreatTheme;

  export interface Theme extends TreatTheme {}
}
