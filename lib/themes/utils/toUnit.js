export const px = str =>
  str.length === 0 || /^0$|[a-z]+/.test(str) ? str : `${str}px`;
