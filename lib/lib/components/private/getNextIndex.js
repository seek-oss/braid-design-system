export function getNextIndex(moveAmount, current, total) {
  var maxIndex = total - 1;

  if (current === null) {
    return moveAmount > 0 ? 0 : maxIndex;
  }

  var nextIndex = moveAmount + current;

  if (nextIndex > maxIndex) {
    return 0;
  }

  if (nextIndex < 0) {
    return maxIndex;
  }

  return nextIndex;
}