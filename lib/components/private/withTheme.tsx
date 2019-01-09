import React, { ComponentType } from 'react';
import ThemeContext from '../private/ThemeContext';
import { Theme } from '../../themes/theme';

export interface WithThemeProps {
  theme: Theme;
}

interface ThemeOverrideProps {
  theme?: Theme;
}

const withTheme = <OriginalProps extends WithThemeProps>(
  OriginalComponent: ComponentType<OriginalProps>
) => {
  // List of prop keys, passed in excluding `theme`
  type OriginalPropsWithoutTheme = Exclude<
    keyof OriginalProps,
    keyof WithThemeProps
  >;

  // New prop type definition without `theme`
  type ComponentProps = Pick<OriginalProps, OriginalPropsWithoutTheme>;

  return class WithTheme extends React.Component<
    ComponentProps & ThemeOverrideProps
  > {
    static displayName = `withTheme(${OriginalComponent.displayName ||
      'Component'})`;

    render() {
      return (
        <ThemeContext.Consumer>
          {theme => {
            if (theme === null) {
              throw new Error('No theme passed');
            }

            return (
              <OriginalComponent
                theme={theme}
                {...this.props as any} // Workaround for https://github.com/Microsoft/TypeScript/issues/28748
              />
            );
          }}
        </ThemeContext.Consumer>
      );
    }
  };
};

export default withTheme;
