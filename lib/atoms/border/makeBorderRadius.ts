export interface BorderRadiusParams {
  standard: string;
}

export default ({ standard }: BorderRadiusParams) => ({
  '.borderRadius_standard': { borderRadius: standard }
});
