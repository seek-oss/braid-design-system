import React, { ReactType, AllHTMLAttributes } from 'react';
import { useClassNames } from 'sku/treat';
import { ResetTags } from '../../themes/theme';
import { useTheme } from '../private/ThemeContext';

export interface ResetProps extends AllHTMLAttributes<HTMLElement> {
  component?: ReactType;
}

const isResetTag = (
  atom: Record<ResetTags, string>,
  component: ResetTags | ReactType,
): component is ResetTags =>
  typeof component === 'string' && Object.keys(atom).indexOf(component) > -1;

export const Reset = ({
  component = 'div',
  className = '',
  ...restProps
}: ResetProps) => {
  const theme = useTheme();
  const resetClass = isResetTag(theme.atoms.reset, component)
    ? theme.atoms.reset[component]
    : '';

  return React.createElement(component, {
    className: useClassNames(className, resetClass),
    ...restProps,
  });
};
