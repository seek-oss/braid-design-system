export function getNextIndex(moveAmount, current, total) {
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