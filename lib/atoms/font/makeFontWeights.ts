export interface FontWeightParams {
  regular: number;
  medium: number;
  strong: number;
}

export default ({ regular, medium, strong }: FontWeightParams) => ({
  '.fontWeight_regular': { fontWeight: regular },
  '.fontWeight_medium': { fontWeight: medium },
  '.fontWeight_strong': { fontWeight: strong },
});
