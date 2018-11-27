import React, { ComponentType } from 'react';
import ThemeContext from '../private/ThemeContext';

import { Theme } from '../../themes/theme';

export interface WithThemeProps {
  theme: Theme;
}

interface WithOverrideThemeProps {
  theme?: Theme;
}

const withTheme = <P extends WithThemeProps>(Component: ComponentType<P>) => {
  // List of prop keys, passed in excluding `theme`
  type WrappedComponentPropsWithoutTheme = Exclude<
    keyof P,
    keyof WithThemeProps
  >;
  // New prop type definition without `theme`
  type ComponentProps = Pick<P, WrappedComponentPropsWithoutTheme>;

  return class WithTheme extends React.Component<
    ComponentProps & WithOverrideThemeProps
  > {
    static displayName = `withTheme(${Component.displayName || 'Component'})`;

    render() {
      return (
        <ThemeContext.Consumer>
          {theme => {
            if (theme === null) {
              throw new Error('No theme passed');
            }

            return (
              <Component {...this.props} theme={this.props.theme || theme} />
            );
          }}
        </ThemeContext.Consumer>
      );
    }
  };
};
export default withTheme;
