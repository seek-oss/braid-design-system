export interface FontFamilyParams {
  fontFamily: string;
}
export default ({ fontFamily }: FontFamilyParams) => ({
  '.fontFamily_text': {
    fontFamily,
  },
});
