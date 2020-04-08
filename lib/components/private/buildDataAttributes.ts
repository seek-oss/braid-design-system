export type DataAttributeMap = Record<string, string | number>;

export default (
  data: DataAttributeMap = {},
): { [dataAttribute: string]: string } =>
  Object.assign(
    {},
    ...Object.keys(data).map((key) => ({ [`data-${key}`]: data[key] })),
  );
