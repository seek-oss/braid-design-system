import { InlineProps } from '../Inline/Inline';
import { PrivateButtonRendererProps } from '../ButtonRenderer/ButtonRenderer';
export interface ActionsProps {
  size?: PrivateButtonRendererProps['size'];
  children: InlineProps['children'];
  data?: InlineProps['data'];
}
export declare const Actions: ({
  size,
  data,
  children,
}: ActionsProps) => JSX.Element;
