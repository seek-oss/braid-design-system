import '../reset';
import { ReactNode } from 'react';
import { BraidTheme } from '../themes/BraidTheme';
interface Props {
    theme: BraidTheme;
    children: ReactNode;
}
declare const _default: ({ theme, children }: Props) => JSX.Element;
export default _default;
