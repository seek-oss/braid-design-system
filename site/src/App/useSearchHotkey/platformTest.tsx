export const isMac = (): boolean =>
  navigator.platform.startsWith('Mac') ||
  navigator.platform === 'iPhone' ||
  navigator.platform === 'iPad' ||
  navigator.platform === 'iPod';
