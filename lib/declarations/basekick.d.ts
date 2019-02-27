declare module 'basekick' {
  export default ({
    baseFontSize: number,
    typeSizeModifier: number,
    typeRowSpan: number,
    gridRowHeight: number,
    descenderHeightScale: number
  }) => ({
    fontSize: string,
    lineHeight: string,
    transform: string
  });
}
