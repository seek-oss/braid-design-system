export const mergeIds = (...ids: Array<string | undefined>) => {
  const validIds = ids.filter(Boolean);

  if (validIds.length === 0) {
    return undefined;
  }

  return validIds.join(' ');
};
