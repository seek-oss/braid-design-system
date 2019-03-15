import React, { ReactType, AllHTMLAttributes } from 'react';
import classnames from 'classnames';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';
import { ResetTags } from '../../themes/theme';

export interface ResetProps extends AllHTMLAttributes<HTMLElement> {
  component?: ReactType;
}

const isResetTag = (
  atom: Record<ResetTags, string>,
  component: ResetTags | ReactType,
): component is ResetTags =>
  typeof component === 'string' && Object.keys(atom).indexOf(component) > -1;

const Reset = ({
  component = 'div',
  className = '',
  ...restProps
}: ResetProps) => (
  <ThemeConsumer>
    {theme => {
      const resetClass = isResetTag(theme.atoms.reset, component)
        ? theme.atoms.reset[component]
        : '';

      return React.createElement(component, {
        className: classnames(className, resetClass),
        ...restProps,
      });
    }}
  </ThemeConsumer>
);

Reset.displayName = 'Reset';

export default Reset;
