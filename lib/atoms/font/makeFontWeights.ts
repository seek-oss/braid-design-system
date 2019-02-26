export interface FontWeightParams {
  regular: string;
  medium: string;
  strong: string;
}

export default ({ regular, medium, strong }: FontWeightParams) => ({
  '.fontWeight_regular': { fontWeight: regular },
  '.fontWeight_medium': { fontWeight: medium },
  '.fontWeight_strong': { fontWeight: strong }
});
