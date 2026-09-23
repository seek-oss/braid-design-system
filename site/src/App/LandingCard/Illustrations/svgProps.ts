import type { SVGProps } from 'react';

export const illustrationSvgProps = (
  viewBox: string,
): SVGProps<SVGSVGElement> => ({
  width: '100%',
  height: '100%',
  viewBox,
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  focusable: 'false',
  'aria-hidden': true,
});
