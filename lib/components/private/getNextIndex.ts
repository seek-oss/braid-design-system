export function getNextIndex(
  moveAmount: 1 | -1,
  current: number | null,
  total: number,
) {
  const maxIndex = total - 1;

  if (current === null) {
    return moveAmount > 0 ? 0 : maxIndex;
  }

  const nextIndex = moveAmount + current;

  if (nextIndex > maxIndex) {
    return 0;
  }

  if (nextIndex < 0) {
    return maxIndex;
  }

  return nextIndex;
}
