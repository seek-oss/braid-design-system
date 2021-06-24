import { CSSProperties, ReactElement } from 'react';
import { Atoms } from '../../atoms/atoms';
interface StyleProps {
  style: CSSProperties;
  className: string;
}
declare type TextLinkWeight = 'regular' | 'weak';
export interface PrivateTextLinkRendererProps {
  reset?: Atoms['reset'] | false;
  weight?: TextLinkWeight;
  showVisited?: boolean;
  hitArea?: 'standard' | 'large';
  children: (styleProps: StyleProps) => ReactElement;
}
export declare const PrivateTextLinkRenderer: (
  props: PrivateTextLinkRendererProps,
) => JSX.Element;
/** @deprecated `TextLinkRenderer` has been deprecated. Use [TextLink](https://seek-oss.github.io/braid-design-system/components/TextLink) or [TextLinkButton](https://seek-oss.github.io/braid-design-system/components/TextLinkButton) instead.  If your usage of `TextLinkRenderer` is not covered by either of these, please let us know. */
export declare const TextLinkRenderer: (
  props: PrivateTextLinkRendererProps,
) => JSX.Element;
export {};
