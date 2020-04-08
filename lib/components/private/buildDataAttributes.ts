export type DataAttributeMap = Record<string, string | number>;

export default (data: DataAttributeMap = {}): DataAttributeMap => {
  const keys = Object.keys(data);
  const dataAttributes: DataAttributeMap = {};

  for (const key of keys) {
    dataAttributes[`data-${key}`] = data[key];
  }

  return dataAttributes;
};
