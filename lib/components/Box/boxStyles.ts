import classNames from 'classnames';
import { ElementType } from 'react';
import * as resetStyles from '../../reset/reset.css';
import { themeVars } from '../../themes/themeVars.css';
import { atoms, RequiredResponsiveValue } from '../../sprinkles/sprinkles.css';

type AtomProps = Parameters<typeof atoms>[0];

export type Space = keyof typeof themeVars.space | 'none';
export type ResponsiveSpace = RequiredResponsiveValue<Space>;

export interface BoxStylesProps extends AtomProps {
  component: ElementType | null;
  className?: Parameters<typeof classNames>[0];
}

export const boxStyles = ({ component, className, ...rest }: BoxStylesProps) =>
  classNames(
    atoms(rest),
    resetStyles.base,
    resetStyles.element[component as keyof typeof resetStyles.element],
    className,
  );
